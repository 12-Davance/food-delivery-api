const { Schema, model } = require("mongoose");

const menuCategorySchema = new Schema({
  menuId: { type: Schema.ObjectId, required: true },
  name: { type: String, required: true },
  description: String,
  avatar: String,
  status: { type: String, enum: ["active", "inactive"], default: "inactive" },
  createdAt: Date,
  updatedAt: Date,
});

module.exports = model("MenuCategory", menuCategorySchema);
