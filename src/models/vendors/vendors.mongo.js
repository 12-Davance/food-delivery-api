const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  credential: {
    type: { username: String, password: String },
    required: true,
    _id: false,
  },
  category: String,
  branches: { type: [{ type: mongoose.Schema.ObjectId, ref: "Branch" }] },
  avatar: { type: String },
  email: String,
  status: { type: String, default: "active", enum: ["inactive", "active"] },
  createdAt: Date,
  updatedAt: Date,
  ratings: [{ type: mongoose.Schema.ObjectId, ref: "Rating" }],
});

module.exports = mongoose.model("Vendor", vendorSchema);
