const {
  createAdmin,
  updateAdmin,
} = require("../../models/admins/admins.model");
const { createUser, findUser } = require("../../models/users/users.model");
const Admin = require("../../models/admins/admins.mongo");

const httpCreateAdmin = async (req, res) => {
  const { username, password, ...rest } = req.body;
  const { firstName, phoneNumber, role } = rest;

  if (!username || !password || !firstName || !phoneNumber || !role)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const user = await findUser(username, "admin");

  if (user)
    return res
      .status(200)
      .json({ status: false, message: "admin already exists!" });

  const admin = new Admin({
    ...rest,
    createdAt: Date.now(),
  });

  await createUser(username, password, "admin", admin._id);

  const result = await createAdmin(admin);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpUpdateAdmin = async (req, res) => {
  const { adminId } = req.body;

  console.log("BODY", req.body);

  if (!adminId)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const result = await updateAdmin(req.body);

  console.log("RESULT", result);

  return res.status(200).json({
    status: true,
    message: "success",
    data: result,
  });
};

module.exports = {
  httpCreateAdmin,
  httpUpdateAdmin,
};
