const {
  createBranch,
  updateBranch,
  getBranches,
} = require("../../models/branches/branches.model");
const Branch = require("../../models/branches/branches.mongo");

const httpCreateBranch = async (req, res) => {
  const { vendorId, name, location, phoneNumbers, workingDays, workingHours } =
    req.body;
  console.log("BODY", req.body);

  if (
    !vendorId ||
    !name ||
    !location.lat ||
    !location.long ||
    phoneNumbers.length === 0 ||
    workingDays.length === 0 ||
    !workingHours.start ||
    !workingHours.end
  )
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const branch = new Branch({
    ...req.body,
    createdAt: Date.now(),
  });

  const result = await createBranch(branch);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpUpdateBranch = async (req, res) => {
  const { branchId } = req.body;

  console.log("REQUEST.BODY", req.body);

  if (!branchId)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  let updatedBranch = {
    ...req.body,
    updatedAt: Date.now(),
  };

  const result = await updateBranch(updatedBranch);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpGetBranches = async (req, res) => {
  const vendorId = req.query.vendorId;

  const result = await getBranches(vendorId);

  return res.status(200).json({ status: true, data: result });
};

module.exports = {
  httpCreateBranch,
  httpUpdateBranch,
  httpGetBranches,
};
