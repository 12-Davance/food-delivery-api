const Branch = require("./branches.mongo");

const getBranches = async (vendorId) => {
  return Branch.find({ vendorId })
    .then((res) => res)
    .catch((err) => err);
};

const createBranch = async (branch) => {
  console.log("CREATED BRANCH", branch);
  return Branch.create(branch)
    .then((response) => response)
    .catch((err) => err);
};

const updateBranch = async (branch) => {
  const { branchId } = branch;

  return Branch.findOneAndUpdate(
    { _id: branchId },
    {
      $set: branch,
    },
    { new: true }
  )
    .then((response) => response)
    .catch((err) => err);
};

module.exports = {
  createBranch,
  updateBranch,
  getBranches,
};
