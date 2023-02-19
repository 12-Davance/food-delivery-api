const Extra = require("./extras.mongo");

const getExtras = async (itemId) => {
  return Extra.find({ itemId })
    .then((res) => res)
    .catch((err) => err);
};

const createExtra = async (extra) => {
  return Extra.create(extra)
    .then((response) => response)
    .catch((err) => err);
};

const updateExtra = async (extra) => {
  const { extraId } = extra;

  return Extra.findOneAndUpdate(
    { _id: extraId },
    {
      $set: extra,
    },
    { new: true }
  )
    .then((response) => response)
    .catch((err) => err);
};

module.exports = {
  createExtra,
  updateExtra,
  getExtras,
};
