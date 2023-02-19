const express = require("express");

const {
  httpCreateMenuItem,
  httpUpdateMenuItem,
  httpGetMenuItems,
} = require("./menu-items.controller");

const menuItemsRouter = express.Router();

menuItemsRouter.post("/create", httpCreateMenuItem);
menuItemsRouter.put("/update", httpUpdateMenuItem);
menuItemsRouter.get("/", httpGetMenuItems);

module.exports = menuItemsRouter;
