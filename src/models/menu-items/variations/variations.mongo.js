const { Schema, model } = require("mongoose");

const variationSchema = new Schema({
  itemId: { type: Schema.ObjectId, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
});

module.exports = model("Variation", variationSchema);
