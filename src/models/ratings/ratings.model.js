const Rating = require("../ratings/ratings.mongo");

const rateTarget = async (rate) => {
  console.log("RATING DATA", rate);

  return Rating.create(rate)
    .then((response) => response)
    .catch((err) => err);
};

const updateRate = async (rate) => {
  const { rateId } = rate;
  console.log("UPDATED RATING DATA", rate);

  return Rating.findOneAndUpdate({ _id: rateId }, { $set: rate }, { new: true })
    .then((response) => response)
    .catch((err) => err);
};

module.exports = {
  rateTarget,
  updateRate,
};
