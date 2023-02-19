const express = require("express");

const {
  httpCreateExtra,
  httpUpdateExtra,
  httpGetExtras,
} = require("./extras.controller");

const extrasRouter = express.Router();

extrasRouter.post("/create", httpCreateExtra);
extrasRouter.put("/update", httpUpdateExtra);
extrasRouter.get("/", httpGetExtras);

module.exports = extrasRouter;
