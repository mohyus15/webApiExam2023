const {
	getProducts,
	getProductsById,
	createProduct,
	createProductsReview,
	deleteProduct,
	getTopProducts,
} = require('../controllers/productController.js');
const express = require('express');
const {
	admin,
	protect,
} = require('../midddelwars/permission.js');

const productRouter = express.Router();
productRouter.post(
	'/:id/review',
	protect,
	createProductsReview
);
productRouter.get('/top', getTopProducts);
productRouter.post('/', protect, admin, createProduct);
productRouter.get('/', getProducts);
productRouter.get('/:id', getProductsById);
productRouter.delete('/:id', protect, admin, deleteProduct);
module.exports = productRouter;
