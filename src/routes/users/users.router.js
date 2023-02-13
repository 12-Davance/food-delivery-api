const express = require("express");

const {
  httpLoginUser,
  httpSignUpUser,
  httpUpdateUser,
  httpIsUserLoggedIn,
} = require("./users.controller");

const usersRouter = express.Router();

usersRouter.post("/login", httpLoginUser);
usersRouter.post("/signUp", httpSignUpUser);
usersRouter.put("/", httpUpdateUser);
usersRouter.get("/", httpIsUserLoggedIn);

module.exports = usersRouter;
