const Vendor = require("./vendors.mongo");

const getVendors = async () => {
  return Vendor.find()
    .then((data) => data)
    .catch((err) => err);
};

const createVendor = async (vendor) => {
  return Vendor.create(vendor)
    .then((data) => data)
    .catch((err) => err);
};

const updateVendor = async (vendor) => {
  const { _id } = vendor;
  console.log("USER", vendor);
  return Vendor.findOneAndUpdate(
    { _id },
    { $set: { ...vendor, updatedAt: Date.now() } },
    { new: true }
  )
    .then((data) => data)
    .catch((err) => err);
};

module.exports = {
  getVendors,
  createVendor,
  updateVendor,
};
