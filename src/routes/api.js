const express = require('express');
const vendorsRouter = require('./vendors/vendors.router');

const api = express.Router();

api.use('/vendors', vendorsRouter);


module.exports = api;