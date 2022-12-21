const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  description: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  alternativePhoneNumber: {type: String, required: true},
  coordinates: {type: {lat: String, long: String}, required: true},
  email: {type: String, required: true}
});

module.exports = mongoose.model('Rating', addressSchema);
