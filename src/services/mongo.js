const mongoose = require("mongoose");

require("dotenv").config();

const mongoDevUrl = process.env.MONGO_DEV_URL;
const mongoUrl = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(mongoDevUrl || mongoUrl);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
