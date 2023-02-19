const express = require("express");

const {
  httpCreateMenuCategory,
  httpUpdateMenuCategory,
  httpGetMenuCategories,
} = require("./menu-categories.controller");

const menuCategoriesRouter = express.Router();

menuCategoriesRouter.post("/create", httpCreateMenuCategory);
menuCategoriesRouter.put("/update", httpUpdateMenuCategory);
menuCategoriesRouter.get("/", httpGetMenuCategories);

module.exports = menuCategoriesRouter;
