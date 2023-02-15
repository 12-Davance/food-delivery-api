const express = require("express");
const {
  httpGetVendors,
  httpCreateVendor,
  httpUpdateVendor,
} = require("./vendors.controller");

const vendorsRouter = express.Router();

vendorsRouter.get("/", httpGetVendors);
vendorsRouter.post("/create", httpCreateVendor);
vendorsRouter.put("/update", httpUpdateVendor);

module.exports = vendorsRouter;
