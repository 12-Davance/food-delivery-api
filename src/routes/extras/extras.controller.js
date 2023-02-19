const {
  createExtra,
  updateExtra,
  getExtras,
} = require("../../models/menu-items/extras/extras.model");
const Extra = require("../../models/menu-items/extras/extras.mongo");

const httpCreateExtra = async (req, res) => {
  const { itemId, name, price } = req.body;
  console.log("BODY", req.body);

  if (!itemId || !name || !price)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const extra = new Extra({
    ...req.body,
    createdAt: Date.now(),
  });

  const result = await createExtra(extra);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpUpdateExtra = async (req, res) => {
  const { extraId } = req.body;

  console.log("REQUEST.BODY", req.body);

  if (!extraId)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  let updatedExtra = {
    ...req.body,
    updatedAt: Date.now(),
  };

  const result = await updateExtra(updatedExtra);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpGetExtras = async (req, res) => {
  const itemId = req.query.itemId;

  const result = await getExtras(itemId);

  return res.status(200).json({ status: true, data: result });
};

module.exports = {
  httpCreateExtra,
  httpUpdateExtra,
  httpGetExtras,
};
