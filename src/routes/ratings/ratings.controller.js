const {
  rateTarget,
  updateRate,
} = require("../../models/ratings/ratings.model");
const Rating = require("../../models/ratings/ratings.mongo");

const httpRateTarget = async (req, res) => {
  const { target, score } = req.body;
  console.log("BODY", req.body);

  if (!target || !score)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const rate = new Rating({
    ...req.body,
    createdAt: Date.now(),
  });

  const result = await rateTarget(rate);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpUpdateRate = async (req, res) => {
  const { rateId, score } = req.body;
  console.log("BODY", req.body);

  if (!rateId || !score)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const rate = {
    ...req.body,
    updatedAt: Date.now(),
  };

  const result = await updateRate(rate);

  console.log("RESULT", result);

  return res.status(200).json({
    status: true,
    message: "success",
    data: result,
  });
};

module.exports = {
  httpRateTarget,
  httpUpdateRate,
};
