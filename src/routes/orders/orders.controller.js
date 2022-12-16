


const httpGetAllOrders = (req, res) => {
   res.status(201).json({status: 'Orders list coming soon!', data: []});
}

const httpCreateOrder = (req, res) => {
    res.status(201).json({status: 'Order creation coming soon!', createdOrder: {}});
}


module.exports = {
    httpGetAllOrders,
    httpCreateOrder
}