const {
  createMenuItem,
  updateMenuItem,
  getMenuItems,
} = require("../../models/menu-items/menu-items.model");
const MenuItem = require("../../models/menu-items/menu-items.mongo");

const httpCreateMenuItem = async (req, res) => {
  const { categoryId, name } = req.body;
  console.log("BODY", req.body);

  if (!categoryId || !name)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const item = new MenuItem({
    ...req.body,
    createdAt: Date.now(),
  });

  const result = await createMenuItem(item);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpUpdateMenuItem = async (req, res) => {
  const { itemId } = req.body;

  console.log("REQUEST.BODY", req.body);

  if (!itemId)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  let updatedItem = {
    ...req.body,
    updatedAt: Date.now(),
  };

  const result = await updateMenuItem(updatedItem);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpGetMenuItems = async (req, res) => {
  const categoryId = req.query.categoryId;

  const result = await getMenuItems(categoryId);

  return res.status(200).json({ status: true, data: result });
};

module.exports = {
  httpCreateMenuItem,
  httpUpdateMenuItem,
  httpGetMenuItems,
};
