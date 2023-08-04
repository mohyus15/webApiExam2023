const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
	{
		user: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Product', productSchema);
