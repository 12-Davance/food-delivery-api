const express = require("express");

const {
  httpCreateMenu,
  httpUpdateMenu,
  httpGetMenus,
} = require("./menus.controller");

const menusRouter = express.Router();

menusRouter.post("/create", httpCreateMenu);
menusRouter.put("/update", httpUpdateMenu);
menusRouter.get("/", httpGetMenus);

module.exports = menusRouter;
