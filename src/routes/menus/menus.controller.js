const {
  createMenu,
  updateMenu,
  getMenus,
} = require("../../models/menus/menus.model");
const Menu = require("../../models/menus/menus.mongo");

const httpCreateMenu = async (req, res) => {
  const { branchId, name } = req.body;
  console.log("BODY", req.body);

  if (!branchId || !name)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const menu = new Menu({
    ...req.body,
    createdAt: Date.now(),
  });

  const result = await createMenu(menu);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpUpdateMenu = async (req, res) => {
  const { menuId } = req.body;

  console.log("REQUEST.BODY", req.body);

  if (!menuId)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  let updatedMenu = {
    ...req.body,
    updatedAt: Date.now(),
  };

  const result = await updateMenu(updatedMenu);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpGetMenus = async (req, res) => {
  const branchId = req.query.branchId;

  const result = await getMenus(branchId);

  return res.status(200).json({ status: true, data: result });
};

module.exports = {
  httpCreateMenu,
  httpUpdateMenu,
  httpGetMenus,
};
