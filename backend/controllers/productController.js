const Product = require('../models/productModels.js');
const createProduct = async (req, res) => {
	const { name, image, brand } = req.body;

	try {
		const productCreated = await Product.create({
			name,
			image,
			brand,
		});
		res.status(201).json(productCreated);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const deleteProduct = async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		await Product.deleteOne({ _id: product._id });
		res
			.status(200)
			.json({ message: 'user deleted wa successfully' });
	} else {
		res.status(404);
		throw new Error('user not found');
	}
};

const getProducts = async (req, res) => {
	const products = await Product.find();

	res.status(200).json(products);
};
const getProductsById = async (req, res) => {
	const project = await Product.findById(req.params.id);

	if (project) {
		res.json(project);
	} else {
		res.status(404);
		throw new Error('Project not found');
	}
};

module.exports = {
	deleteProduct,
	getProductsById,
	createProduct,
	getProducts,
};
