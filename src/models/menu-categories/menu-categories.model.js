const MenuCategory = require("./menu-categories.mongo");

const getMenuCategories = async (menuId) => {
  return MenuCategory.find({ menuId })
    .then((res) => res)
    .catch((err) => err);
};

const createMenuCategory = async (menu) => {
  return MenuCategory.create(menu)
    .then((response) => response)
    .catch((err) => err);
};

const updateMenuCategory = async (category) => {
  const { categoryId } = category;

  return MenuCategory.findOneAndUpdate(
    { _id: categoryId },
    {
      $set: category,
    },
    { new: true }
  )
    .then((response) => response)
    .catch((err) => err);
};

module.exports = {
  createMenuCategory,
  updateMenuCategory,
  getMenuCategories,
};
