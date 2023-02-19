const Client = require("./clients.mongo");

const findClient = async (adminId) => {
  return Client.findById(adminId)
    .then((response) => response)
    .catch((err) => err);
};

const createClient = async (client) => {
  console.log("CLIENT", client);

  return Client.create(client)
    .then((response) => response)
    .catch((err) => err);
};

const updateClient = async (client) => {
  const { clientId } = client;
  return Client.findOneAndUpdate(
    { _id: clientId },
    { $set: { ...client, updatedAt: Date.now() } },
    { new: true }
  )
    .then((response) => response)
    .catch((err) => err);
};

module.exports = { createClient, updateClient, findClient };
