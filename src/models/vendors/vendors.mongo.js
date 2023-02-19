const { Schema, model } = require("mongoose");

const vendorSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ["food"], required: true },
  avatar: { type: String },
  email: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = model("Vendor", vendorSchema);
