const {
  createClient,
  updateClient,
} = require("../../models/clients/clients.model");
const { findUser, createUser } = require("../../models/users/users.model");
const Client = require("../../models/clients/clients.mongo");

const httpCreateClient = async (req, res) => {
  const { username, password, ...rest } = req.body;
  const { firstName, locations } = rest;

  if (!username || !password || !firstName || locations.length === 0)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const user = await findUser(username, "client");

  if (user)
    return res
      .status(200)
      .json({ status: false, message: "user already exists!" });

  const client = new Client({
    ...rest,
    createdAt: Date.now(),
  });

  await createUser(username, password, "client", client._id);

  const result = await createClient(client);

  console.log("RESULT", result);

  return res.status(201).json({
    status: true,
    message: "success",
    data: result,
  });
};

const httpUpdateClient = async (req, res) => {
  const { clientId } = req.body;

  if (!clientId)
    return res
      .status(200)
      .json({ status: false, message: "missing required fields" });

  const result = await updateClient(req.body);

  console.log("RESULT", result);

  return res.status(200).json({
    status: true,
    message: "success",
    data: result,
  });
};

module.exports = { httpCreateClient, httpUpdateClient };
