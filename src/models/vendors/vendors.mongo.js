const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: {type: String, required: true},
  picture: {type: String},
  open: {type: Boolean, required: true},
  status: {type: Boolean, required: true},
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  opening_hours: {type: String, required: true},
  closing_hours: {type: String, required: true},
  menus: [{type: Schema.ObjectId, ref: 'Menu'}],
  ratings: [{type: Schema.ObjectId, ref: 'Rating'}],
  addresses: [{type: Schema.ObjectId, ref: 'Address'}]
});


module.exports = mongoose.model('Vendor', vendorSchema);
