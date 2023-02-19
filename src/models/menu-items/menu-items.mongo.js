const { Schema, model } = require("mongoose");

const menuItemSchema = new Schema({
  categoryId: { type: Schema.ObjectId, required: true },
  name: { type: String, required: true },
  description: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  avatar: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = model("MenuItem", menuItemSchema);
