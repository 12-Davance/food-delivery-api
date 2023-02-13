const User = require("./users.mongo");

const isUserLoggedIn = async (username) => {
  return await User.findOne({ username })
    .then((data) => data.isLoggedIn)
    .catch((err) => err);
};

const findUser = async (username) => {
  return await User.findOne({ username })
    .then((data) => data)
    .catch((err) => err);
};

const login = async (username) => {
  return await User.findOneAndUpdate(
    { username },
    { $set: { isLoggedIn: { status: true, timeStamp: Date.now() } } },
    { new: true }
  )
    .then((data) => data)
    .catch((err) => err);
};

const signUp = async (user) => {
  return await User.create(user)
    .then((data) => data)
    .catch((err) => err);
};

const updateUser = async (user) => {
  const { _id } = user;
  return await User.findOneAndUpdate({ _id }, { $set: user }, { new: true })
    .then((data) => data)
    .catch((err) => err);
};

module.exports = {
  login,
  signUp,
  updateUser,
  findUser,
  isUserLoggedIn,
};
