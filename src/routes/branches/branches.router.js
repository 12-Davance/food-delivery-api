const express = require("express");

const {
  httpCreateBranch,
  httpUpdateBranch,
  httpGetBranches,
} = require("./branches.controller");

const branchesRouter = express.Router();

branchesRouter.post("/create", httpCreateBranch);
branchesRouter.put("/update", httpUpdateBranch);
branchesRouter.get("/", httpGetBranches);

module.exports = branchesRouter;
