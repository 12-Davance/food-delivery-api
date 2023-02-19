const Variation = require("./variations.mongo");

const getVariations = async (itemId) => {
  return Variation.find({ itemId })
    .then((res) => res)
    .catch((err) => err);
};

const createVariation = async (variation) => {
  return Variation.create(variation)
    .then((response) => response)
    .catch((err) => err);
};

const updateVariation = async (variation) => {
  const { variationId } = variation;

  return Variation.findOneAndUpdate(
    { _id: variationId },
    {
      $set: variation,
    },
    { new: true }
  )
    .then((response) => response)
    .catch((err) => err);
};

module.exports = {
  createVariation,
  updateVariation,
  getVariations,
};
