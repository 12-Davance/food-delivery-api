const MenuItem = require("./menu-items.mongo");

const getMenuItems = async (categoryId) => {
  return MenuItem.find({ categoryId })
    .then((res) => res)
    .catch((err) => err);
};

const createMenuItem = async (item) => {
  return MenuItem.create(item)
    .then((response) => response)
    .catch((err) => err);
};

const updateMenuItem = async (item) => {
  const { itemId } = item;

  return MenuItem.findOneAndUpdate(
    { _id: itemId },
    {
      $set: item,
    },
    { new: true }
  )
    .then((response) => response)
    .catch((err) => err);
};

module.exports = {
  createMenuItem,
  updateMenuItem,
  getMenuItems,
};
