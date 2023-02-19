const Vendor = require("./vendors.mongo");

const getVendors = async () => {
  return Vendor.find()
    .then((response) => response)
    .catch((err) => err);
};

const findVendor = async (adminId) => {
  return Vendor.findById(adminId)
    .then((response) => response)
    .catch((err) => err);
};

const createVendor = async (vendor) => {
  return Vendor.create(vendor)
    .then((response) => response)
    .catch((err) => err);
};

const updateVendor = async (vendor) => {
  const { vendorId } = vendor;
  console.log("USER", vendor);
  return Vendor.findOneAndUpdate(
    { _id: vendorId },
    { $set: { ...vendor, updatedAt: Date.now() } },
    { new: true }
  )
    .then((response) => response)
    .catch((err) => err);
};

module.exports = {
  getVendors,
  createVendor,
  updateVendor,
  findVendor,
};
