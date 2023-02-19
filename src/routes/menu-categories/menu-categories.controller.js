const {
  createMenuCategory,
  updateMenuCategory,
  getMenuCategories,
} = require("../../models/menu-categories/menu-categories.model");
const MenuCategory = require("../../models/menu-categories/menu-categories.mongo");

const httpCreateMenuCategory = async (req, res) => {
  const { menuId, name } = req.body;
  console.log("BODY", req.body);

  if (!menuId || !name)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const category = new MenuCategory({
    ...req.body,
    createdAt: Date.now(),
  });

  const result = await createMenuCategory(category);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpUpdateMenuCategory = async (req, res) => {
  const { categoryId } = req.body;

  console.log("REQUEST.BODY", req.body);

  if (!categoryId)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  let updatedMenu = {
    ...req.body,
    updatedAt: Date.now(),
  };

  const result = await updateMenuCategory(updatedMenu);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpGetMenuCategories = async (req, res) => {
  const menuId = req.query.menuId;

  const result = await getMenuCategories(menuId);

  return res.status(200).json({ status: true, data: result });
};

module.exports = {
  httpCreateMenuCategory,
  httpUpdateMenuCategory,
  httpGetMenuCategories,
};
