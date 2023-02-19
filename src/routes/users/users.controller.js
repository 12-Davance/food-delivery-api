const {
  login,
  updateUser,
  findUser,
  activateAccount,
  resetActivation,
} = require("../../models/users/users.model");
const { findAdmin } = require("../../models/admins/admins.model");
const { findClient } = require("../../models/clients/clients.model");
const { findVendor } = require("../../models/vendors/vendors.model");
const bcrypt = require("bcrypt");

const checkDateDiff = (date) => {
  return (new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
};

const httpConfirmEmail = async (req, res) => {
  const { username, code } = req.body;

  if (!code)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const user = await findUser(username, "client");

  if (!user)
    return res
      .status(200)
      .json({ status: false, message: "user does not exist" });

  let response;

  if (checkDateDiff(user.activationCode.createdAt) < 1) {
    if (code === user.activationCode.code) {
      await activateAccount(username);
      response = { status: true, message: "success" };
    } else {
      response = { status: false, message: "invalid code" };
    }
  } else {
    // if the code hasn't been used for more than 24 hours
    await resetActivation(username);
    response = {
      status: true,
      message: "your activation has been reset, please check your email",
    };
  }

  return res.status(200).json(response);
};

const httpIsUserLoggedIn = async (req, res) => {
  const username = req.query.username;
  const userType = req.query.type;
  console.log(req.query);

  const user = await findUser(username, userType);
  console.log("USER == ", user);

  if (!user)
    return res
      .status(200)
      .json({ status: false, message: "user does not exist" });

  let isLoggedIn;

  if (user.isLoggedIn.status) {
    console.log("DATE DIFF", checkDateDiff(user.isLoggedIn.timeStamp));
    isLoggedIn = {
      timeStamp: user.isLoggedIn.timeStamp,
      status: checkDateDiff(user.isLoggedIn.timeStamp) < 7,
    };
  } else {
    isLoggedIn = {
      status: false,
    };
  }

  console.log("RESULT", isLoggedIn);

  return res.status(200).json({ status: true, data: isLoggedIn });
};

const httpLoginUser = async (req, res) => {
  const { username, password, type } = req.body;

  console.log("req.body", req.body);

  if (!username || !password || !type)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const user = await findUser(username, type);

  console.log("FOUND USER DATA", user);

  if (!user)
    return res
      .status(200)
      .json({ status: false, message: "user does not exist" });

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    return res.status(200).json({ status: false, message: "invalid password" });

  if (user.type === "client" && user.usageStatus === "pending")
    return res.status(403).json({
      status: false,
      message: "please confirm your email first",
    });

  const result = await login(username);

  let userData = {
    username,
  };

  if (type === "admin") {
    const { _doc } = await findAdmin(result.owner);
    userData = { ...userData, ..._doc };
  } else if (type === "client") {
    const { _doc } = await findClient(result.owner);
    userData = { ...userData, ..._doc };
  } else if (type === "vendor") {
    const { _doc } = await findVendor(result.owner);
    userData = { ...userData, ..._doc };
  }

  console.log("USER DATA", userData);

  return res.status(200).json({ status: true, data: userData });
};

const httpUpdateUser = async (req, res) => {
  const { owner, password } = req.body;

  console.log("BODY", req.body);

  if (!owner || !password)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  await updateUser(req.body);

  return res.status(200).json({ status: true, message: "success", data: null });
};

module.exports = {
  httpLoginUser,
  httpUpdateUser,
  httpIsUserLoggedIn,
  httpConfirmEmail,
};
