const express = require("express");
const vendorsRouter = require("./vendors/vendors.router");
const usersRouter = require("./users/users.router");
const branchesRouter = require("./branches/branches.router");
const ratingsRouter = require("./ratings/ratings.router");
const clientsRouter = require("./clients/clients.router");
const adminsRouter = require("./admins/admins.router");
const menusRouter = require("./menus/menus.router");
const menuCategoriesRouter = require("./menu-categories/menu-categories.router");
const menuItemsRouter = require("./menu-items/menu-items.router");
const variationsRouter = require("./variations/variations.router");
const extrasRouter = require("./extras/extras.router");

const api = express.Router();

api.use("/users", usersRouter);
api.use("/admins", adminsRouter);
api.use("/vendors", vendorsRouter);
api.use("/branches", branchesRouter);
api.use("/menus", menusRouter);
api.use("/categories", menuCategoriesRouter);
api.use("/items", menuItemsRouter);
api.use("/variations", variationsRouter);
api.use("/extras", extrasRouter);
api.use("/ratings", ratingsRouter);
api.use("/clients", clientsRouter);

module.exports = api;
