const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    default: "available",
    enum: ["available", "not-available"],
  },
  avatar: String,
  extras: [{ name: String, price: Number }],
  variations: [{ name: String, price: Number }],
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rating" }],
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
