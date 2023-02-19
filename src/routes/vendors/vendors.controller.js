const {
  getVendors,
  createVendor,
  updateVendor,
} = require("../../models/vendors/vendors.model");
const { createUser, findUser } = require("../../models/users/users.model");
const Vendor = require("../../models/vendors/vendors.mongo");

const httpGetVendors = async (req, res) => {
  const vendors = await getVendors();
  console.log("VENDORS", vendors);
  return res.status(200).json({ status: true, data: vendors });
};

const httpCreateVendor = async (req, res) => {
  const { username, password, ...rest } = req.body;
  const { name, category } = rest;
  console.log("BODY", req.body);

  if (!name || !category || !username || !password)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const user = await findUser(username, "vendor");

  if (user)
    return res
      .status(200)
      .json({ status: false, message: "vendor already exists!" });

  const vendor = new Vendor({
    ...req.body,
    createdAt: Date.now(),
  });

  await createUser(username, password, "vendor", vendor._id);

  const result = await createVendor(vendor);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpUpdateVendor = async (req, res) => {
  const { vendorId } = req.body;

  console.log("BODY", req.body);

  if (!vendorId)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const result = await updateVendor(req.body);

  console.log("RESULT", result);

  return res
    .status(200)
    .json({ status: true, message: "success", data: result });
};

module.exports = {
  httpGetVendors,
  httpCreateVendor,
  httpUpdateVendor,
};
