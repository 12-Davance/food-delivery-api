const { Schema, model } = require("mongoose");

const ratingSchema = new Schema({
  score: { type: Number, required: true },
  comment: { type: String },
  target: { type: Schema.ObjectId },
  createdAt: Date,
  updatedAt: Date,
});

module.exports = model("Rating", ratingSchema);
