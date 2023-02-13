const express = require('express');
const { httpGetAllVendors } = require('./vendors.controller');

const vendorsRouter = express.Router();

vendorsRouter.get('/', httpGetAllVendors);

module.exports = vendorsRouter;