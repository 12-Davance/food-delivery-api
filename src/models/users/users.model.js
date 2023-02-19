const User = require("./users.mongo");
const bcrypt = require("bcrypt");

const resetActivation = async (username) => {
  const activationCode = {
    code: "againblah",
    createdAt: Date.now(),
  };

  return User.findOneAndUpdate({ username }, { $set: { activationCode } })
    .then((data) => data)
    .catch((err) => err);
};

const activateAccount = async (username) => {
  return User.findOneAndUpdate(
    { username },
    { $set: { usageStatus: "active" } },
    { new: true }
  )
    .then((data) => data)
    .catch((err) => err);
};

const isUserLoggedIn = async (username) => {
  return User.findOne({ username })
    .then((data) => data.isLoggedIn)
    .catch((err) => err);
};

const findUser = async (username, type) => {
  return User.findOne({ username, type })
    .then((response) => response)
    .catch((err) => err);
};

const login = async (username) => {
  // login logic
  return User.findOneAndUpdate(
    { username },
    { $set: { isLoggedIn: { status: true, timeStamp: Date.now() } } },
    { new: true }
  )
    .then((response) => response)
    .catch((err) => err);
};

const createUser = async (username, password, type, owner) => {
  // create user logic
  const saltPassword = await bcrypt.genSalt(12);
  const securePassword = await bcrypt.hash(password, saltPassword);

  const activationCode = {
    code: "blahblah",
    createdAt: Date.now(),
  };

  const user = new User({
    owner,
    username,
    type,
    activationCode,
    usageStatus: type === "client" ? "pending" : "active",
    password: securePassword,
    createdAt: Date.now(),
  });

  await User.create(user)
    .then((response) => response)
    .catch((err) => err);
};

const updateUser = async (user) => {
  // update user logic
  const { owner, password } = user;
  const saltPassword = await bcrypt.genSalt(12);
  const securePassword = await bcrypt.hash(password, saltPassword);

  console.log("USER", user);
  console.log("SECURE PASSWORD", securePassword);

  return User.findOneAndUpdate(
    { owner },
    { $set: { password: securePassword, updatedAt: Date.now() } },
    { new: true }
  )
    .then((response) => response)
    .catch((err) => err);
};

module.exports = {
  login,
  createUser,
  updateUser,
  findUser,
  isUserLoggedIn,
  activateAccount,
  resetActivation,
};
