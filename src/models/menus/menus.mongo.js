const { Schema, model } = require("mongoose");

const menuSchema = new Schema({
  branchId: Schema.ObjectId,
  name: String,
  description: String,
  status: { type: String, enum: ["active", "inactive"], default: "inactive" },
  createdAt: Date,
  updatedAt: Date,
});

module.exports = model("Menu", menuSchema);
