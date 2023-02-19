const Client = require("./clients.mongo");

const findClient = async (adminId) => {
  return Client.findById(adminId)
    .then((response) => response)
    .catch((err) => err);
};

const createClient = async (client) => {
  // create client query
  console.log("CLIENT", client);

  return Client.create(client)
    .then((response) => response)
    .catch((err) => err);
};

const updateClient = async (client) => {
  // update client query
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
