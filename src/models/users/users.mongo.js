const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
  owner: Schema.ObjectId,
  username: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, enum: ["client", "admin", "vendor"], required: true },
  isLoggedIn: {
    type: { status: Boolean, timeStamp: Date },
    default: { status: false },
    _id: false,
  },
  activationCode: {
    type: { code: String, createdAt: Date, updatedAt: Date },
    required: true,
  },
  usageStatus: {
    type: String,
    default: "pending",
    enum: ["active", "inactive", "pending"],
    required: true,
  },
  createdAt: Date,
  updatedAt: Date,
});

module.exports = model("User", usersSchema);
