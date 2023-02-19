const {
  createVariation,
  updateVariation,
  getVariations,
} = require("../../models/menu-items/variations/variations.model");
const Variation = require("../../models/menu-items/variations/variations.mongo");

const httpCreateVariation = async (req, res) => {
  const { itemId, name, price } = req.body;
  console.log("BODY", req.body);

  if (!itemId || !name || !price)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const variation = new Variation({
    ...req.body,
    createdAt: Date.now(),
  });

  const result = await createVariation(variation);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpUpdateVariation = async (req, res) => {
  const { variationId } = req.body;

  console.log("REQUEST.BODY", req.body);

  if (!variationId)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  let updatedVariation = {
    ...req.body,
    updatedAt: Date.now(),
  };

  const result = await updateVariation(updatedVariation);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpGetVariations = async (req, res) => {
  const itemId = req.query.itemId;

  const result = await getVariations(itemId);

  return res.status(200).json({ status: true, data: result });
};

module.exports = {
  httpCreateVariation,
  httpUpdateVariation,
  httpGetVariations,
};
