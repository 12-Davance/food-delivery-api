const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: { lat: String, long: String }, required: true },
  phoneNumbers: { type: [String], required: true },
  working_days: {
    type: [String],
    required: true,
    enum: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  working_hours: { type: { start: String, end: String }, required: true },
  open: { type: Boolean, default: false },
  status: { type: String, default: "active", enum: ["inactive", "active"] },
  createdAt: Date,
  updatedAt: Date,
  menu: { type: mongoose.Schema.ObjectId, ref: "Menu" },
  ratings: [{ type: mongoose.Schema.ObjectId, ref: "Rating" }],
});

module.exports = mongoose.model("Branch", branchSchema);
