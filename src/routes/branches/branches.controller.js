const {
  createBranch,
  updateBranch,
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

  const result = await createBranch({
    ...req.body,
    createdAt: Date.now(),
  });

  console.log("RESULT", result);

  const createdBranch = result.toObject();

  console.log("CREATED BRANCH", createdBranch);

  return res.status(201).json({
    status: true,
    message: "Branch creation successful",
    data: createdBranch,
  });
};

const httpUpdateBranch = (req, res) => {};

module.exports = {
  httpCreateBranch,
  httpUpdateBranch,
};
