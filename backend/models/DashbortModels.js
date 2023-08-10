const mongoose = require('mongoose');

const DashbortSchema = mongoose.Schema(
	{
		user: {
			type: String,
			required: true,
		},
		deperment: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		hours: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Dashbort', DashbortSchema);
