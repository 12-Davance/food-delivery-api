const { Schema, model } = require("mongoose");

const clientsSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  locations: {
    type: [
      {
        name: String,
        description: String,
        phoneNumber: String,
        lat: String,
        long: String,
      },
    ],
    required: true,
  },
  email: String,
  avatar: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = model("Client", clientsSchema);
