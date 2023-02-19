const express = require("express");

const {
  httpLoginUser,
  httpUpdateUser,
  httpIsUserLoggedIn,
} = require("./users.controller");

const usersRouter = express.Router();

usersRouter.post("/login", httpLoginUser);
usersRouter.put("/update", httpUpdateUser);
usersRouter.get("/isLoggedIn", httpIsUserLoggedIn);

module.exports = usersRouter;
