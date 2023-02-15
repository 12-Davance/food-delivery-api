const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  categories: [
    {
      name: String,
      avatar: String,
      menuItems: [{ type: mongoose.Schema.ObjectId, ref: "MenuItem" }],
    },
  ],
});

module.exports = mongoose.model("Menu", menuSchema);
