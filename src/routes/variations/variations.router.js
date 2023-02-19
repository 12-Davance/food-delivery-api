const express = require("express");

const {
  httpCreateVariation,
  httpGetVariations,
  httpUpdateVariation,
} = require("./variations.controller");

const variationsRouter = express.Router();

variationsRouter.post("/create", httpCreateVariation);
variationsRouter.put("/update", httpUpdateVariation);
variationsRouter.get("/", httpGetVariations);

module.exports = variationsRouter;
