const {
  getVendors,
  createVendor,
  updateVendor,
} = require("../../models/vendors/vendors.model");
const Vendor = require("../../models/vendors/vendors.mongo");
const bcrypt = require("bcrypt");

const httpGetVendors = async (req, res) => {
  const vendors = await getVendors();
  console.log("VENDORS", vendors);
  return res.status(200).json({ status: true, data: vendors });
};

const httpCreateVendor = async (req, res) => {
  const { name, credential } = req.body;
  console.log("BODY", req.body);

  if (!name || !credential.username || !credential.password)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const saltPassword = await bcrypt.genSalt(12);
  const securePassword = await bcrypt.hash(credential.password, saltPassword);

  const newVendor = new Vendor({
    ...req.body,
    credential: {
      ...req.body.credential,
      password: securePassword,
    },
    createdAt: Date.now(),
  });

  const result = await createVendor(newVendor);

  console.log("RESULT", result);

  const createdVendor = result.toObject();

  delete createdVendor["credential"];

  console.log("CREATED VENDOR", createdVendor);

  return res.status(201).json({
    status: true,
    message: "Vendor creation successful",
    data: createdVendor,
  });
};

const httpUpdateVendor = async (req, res) => {
  const body = req.body;

  console.log("BODY", body);

  const result = await updateVendor(body);

  const { credential, ...update } = result.toObject();

  console.log("RESULT", result);

  return res.status(200).json({ status: true, data: update });
};

module.exports = {
  httpGetVendors,
  httpCreateVendor,
  httpUpdateVendor,
};
