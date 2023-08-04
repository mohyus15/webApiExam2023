const Product = require('../models/productModels.js');
const multer = require('multer');
const express = require('express');
const UploadRouter = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'images');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const fileFilter = (req, file, cb) => {
	const allowedFileTypes = [
		'image/jpeg',
		'image/jpg',
		'image/png',
	];
	if (allowedFileTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

let upload = multer({ storage, fileFilter });

UploadRouter.route('/add').post(
	upload.single('photo'),
	(req, res) => {
		const image = req.file.filename;

		const ProductData = {
			image,
		};

		const Product = new User(ProductData);

		Product.save()
			.then(() => res.json('User Added'))
			.catch(err => res.status(400).json('Error: ' + err));
	}
);

module.exports = UploadRouter;
