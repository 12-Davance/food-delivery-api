const express = require("express");

const { httpCreateAdmin, httpUpdateAdmin } = require("./admins.controller");

const adminsRouter = express.Router();

adminsRouter.post("/create", httpCreateAdmin);
adminsRouter.put("/update", httpUpdateAdmin);

module.exports = adminsRouter;
