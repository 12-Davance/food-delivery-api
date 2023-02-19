const { Schema, model } = require("mongoose");

const adminsSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  phoneNumber: { type: String, required: true },
  email: String,
  role: {
    type: String,
    enum: ["systemAdmin", "callCenter", "driver"],
    required: true,
  },
  createdAt: Date,
  updatedAt: Date,
});

module.exports = model("Admin", adminsSchema);
