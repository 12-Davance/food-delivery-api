const Admin = require("./admins.mongo");

const findAdmin = async (adminId) => {
  // find admin query
  return Admin.findById(adminId)
    .then((response) => response)
    .catch((err) => err);
};

const createAdmin = async (admin) => {
  // create admin query
  return Admin.create(admin)
    .then((response) => response)
    .catch((err) => err);
};

const updateAdmin = async (admin) => {
  // update admin query
  const { adminId } = admin;
  return Admin.findOneAndUpdate(
    { _id: adminId },
    { $set: { ...admin, updatedAt: Date.now() } },
    { new: true }
  )
    .then((response) => response)
    .catch((err) => err);
};

module.exports = { createAdmin, updateAdmin, findAdmin };
