const Menu = require("./menus.mongo");

const getMenus = async (branchId) => {
  // get menus query
  return Menu.find({ branchId })
    .then((res) => res)
    .catch((err) => err);
};

const createMenu = async (menu) => {
  // create menu query
  console.log("CREATED MENU", menu);
  return Menu.create(menu)
    .then((response) => response)
    .catch((err) => err);
};

const updateMenu = async (menu) => {
  // update menu query
  const { menuId } = menu;

  return Menu.findOneAndUpdate(
    { _id: menuId },
    {
      $set: menu,
    },
    { new: true }
  )
    .then((response) => response)
    .catch((err) => err);
};

module.exports = {
  createMenu,
  updateMenu,
  getMenus,
};
