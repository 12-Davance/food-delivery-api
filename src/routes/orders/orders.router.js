const express = require('express');
const {httpGetAllOrders, httpCreateOrder} = require('./orders.controller');

const ordersRouter = express.Router();

ordersRouter.get('/', httpGetAllOrders);
ordersRouter.post('/', httpCreateOrder);

module.exports = ordersRouter;