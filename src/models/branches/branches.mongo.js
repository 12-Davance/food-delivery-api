const { Schema, model } = require("mongoose");

const branchSchema = new Schema({
  vendorId: { type: Schema.ObjectId, ref: "Vendor" },
  name: { type: String, required: true },
  location: { type: { lat: String, long: String }, required: true, _id: false },
  phoneNumbers: { type: [String], required: true },
  workingDays: {
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
  workingHours: {
    type: { start: String, end: String },
    required: true,
    _id: false,
  },
  open: { type: Boolean, default: false },
  status: { type: String, default: "active", enum: ["inactive", "active"] },
  createdAt: Date,
  updatedAt: Date,
});

module.exports = model("Branch", branchSchema);
