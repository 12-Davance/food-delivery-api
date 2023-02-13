const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  score: {type: Number, required: true},
  comment: {type: String},
});


module.exports = mongoose.model('Rating', ratingSchema);
