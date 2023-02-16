const express = require("express");
const vendorsRouter = require("./vendors/vendors.router");
const usersRouter = require("./users/users.router");
const branchesRouter = require("./branches/branches.router");

const api = express.Router();

api.use("/users", usersRouter);
api.use("/vendors", vendorsRouter);
api.use("/branches", branchesRouter);

module.exports = api;
