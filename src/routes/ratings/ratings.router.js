const express = require("express");

const { httpRateTarget, httpUpdateRate } = require("./ratings.controller");

const ratingsRouter = express.Router();

ratingsRouter.post("/rate", httpRateTarget);
ratingsRouter.put("/update", httpUpdateRate);

module.exports = ratingsRouter;
