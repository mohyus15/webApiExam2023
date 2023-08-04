const {
	getOrderById,
	addOrderItems,
	getMyOrders,
	updateOrderToPayd,
	updateOrderToDelivert,
	getAllOrders,
} = require('../controllers/orderController.js');
const express = require('express');
const {
	admin,
	protect,
} = require('../midddelwars/permission.js');

const orderRouter = express.Router();
orderRouter.get('/mine', protect, getMyOrders);
orderRouter.put('/:id', protect, getOrderById);
orderRouter.get('/', protect, admin, getAllOrders);
orderRouter.put(
	'/:id/delivert',
	protect,
	admin,
	updateOrderToDelivert
);
orderRouter.post('/', addOrderItems);
orderRouter.put('/pay', protect, updateOrderToPayd);
module.exports = orderRouter;
