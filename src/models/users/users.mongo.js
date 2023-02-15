const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  password: { type: String, required: true },
  phoneNumbers: { type: [String], required: true },
  email: String,
  isLoggedIn: {
    type: { status: Boolean, timeStamp: Date },
    default: { status: false, timeStamp: Date.now() },
    _id: false,
  },
  usageStatus: {
    type: String,
    default: "pending",
    enum: ["active", "inactive", "pending"],
    required: true,
  },
  locations: { type: [{ lat: String, long: String }], required: true },
  avatar: String,
  createdAt: Date,
  updatedAt: Date,
});

// Connects usersSchema with the "users" collection
module.exports = mongoose.model("User", usersSchema);
