const express = require("express");

const { httpCreateBranch, httpUpdateBranch } = require("./branches.controller");

const branchesRouter = express.Router();

branchesRouter.post("/create", httpCreateBranch);
branchesRouter.put("/update", httpUpdateBranch);

module.exports = branchesRouter;
