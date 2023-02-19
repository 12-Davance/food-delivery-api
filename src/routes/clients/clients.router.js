const express = require("express");

const { httpCreateClient, httpUpdateClient } = require("./clients.controller");

const clientsRouter = express.Router();

clientsRouter.post("/create", httpCreateClient);
clientsRouter.put("/update", httpUpdateClient);

module.exports = clientsRouter;
