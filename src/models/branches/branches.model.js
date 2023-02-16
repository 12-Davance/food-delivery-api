const Vendor = require("../vendors/vendors.mongo");
const Branch = require("../branches/branches.mongo");

const getBranches = async (vendorId) => {
  //  await Vendor.findById(vendorId)
};

const createBranch = async (branch) => {
  const { vendorId, ...rest } = branch;
  const newBranch = new Branch(rest);
  console.log("FOUND VENDOR", vendorId);
  console.log("BRANCH", newBranch);
  await Vendor.update({ _id: vendorId }, { $push: { branches: newBranch } });

  return Branch.create(newBranch)
    .then((data) => data)
    .catch((err) => err);
};

const updateBranch = () => {};

module.exports = {
  createBranch,
  updateBranch,
};
