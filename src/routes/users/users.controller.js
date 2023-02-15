const {
  login,
  signUp,
  updateUser,
  findUser,
} = require("../../models/users/users.model");
const User = require("../../models/users/users.mongo");
const bcrypt = require("bcrypt");

const httpIsUserLoggedIn = async (req, res) => {
  const username = req.query.username;
  console.log(req.query);

  const checkDateDiff = (date) => {
    return (new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
  };

  const result = await findUser(username);
  let isLoggedIn;

  if (result.isLoggedIn.status) {
    isLoggedIn = {
      timeStamp: result.isLoggedIn.timeStamp,
      status: checkDateDiff(result.isLoggedIn.timeStamp) < 7,
    };
  }

  console.log("RESULT", isLoggedIn);
  console.log("DATE DIFF", checkDateDiff(result.isLoggedIn.timeStamp));

  return res.status(200).json({ status: true, result: isLoggedIn });
};

const httpLoginUser = async (req, res) => {
  const { username, password } = req.body;

  console.log("req.body", req.body);

  if (!username || !password)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const user = await findUser(username);

  console.log("FOUND USER DATA", user);

  if (!user)
    return res
      .status(200)
      .json({ status: false, message: "User does not exist" });

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    return res.status(200).json({ status: false, message: "Invalid password" });

  const result = await login(username);

  const loggedInUser = result.toObject();

  console.log("LOGGED IN USER", loggedInUser);

  delete loggedInUser["password"];

  console.log("USER DATA RETURNED AFTER LOGIN", loggedInUser);

  return res.status(200).json({ status: true, data: loggedInUser });
};

const httpSignUpUser = async (req, res) => {
  const { username, password, firstName, phoneNumbers, locations } = req.body;

  console.log("req.body", req.body);

  if (!username || !password || !firstName || !locations || !phoneNumbers)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const user = await findUser(username);

  if (user)
    return res
      .status(200)
      .json({ status: false, message: "User already exists!" });

  const saltPassword = await bcrypt.genSalt(12);
  const securePassword = await bcrypt.hash(password, saltPassword);

  const newUser = new User({
    ...req.body,
    createdAt: Date.now(),
    password: securePassword,
  });

  console.log("Signed up user", newUser);

  const result = await signUp(newUser);

  console.log("RESULT", result);

  const signedUpUser = result.toObject();

  delete signedUpUser["password"];

  console.log("SIGNED UP USER", signedUpUser);

  return res.status(201).json({
    status: true,
    message: "User sign up successful",
    data: signedUpUser,
  });
};

const httpUpdateUser = async (req, res) => {
  const body = req.body;

  console.log("BODY", body);

  const result = await updateUser(body);
  const { password, ...update } = result.toObject();

  console.log("RESULT", result);

  return res.status(200).json({ status: true, data: update });
};

module.exports = {
  httpLoginUser,
  httpSignUpUser,
  httpUpdateUser,
  httpIsUserLoggedIn,
};
