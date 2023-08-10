const Dashbort = require('../models/DashbortModels.js');
const Hours = require('../models/DashbortModels.js');

const createDashbort = async (req, res) => {
	const { deperment, user, description, hours } = req.body;

	try {
		const DashbortCreated = await Dashbort.create({
			deperment,
			user,
			description,
		});
		res.status(201).json(DashbortCreated);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
const createHourse = async (req, res) => {
	const { hours } = req.body;
	try {
		const housers = await Hours.create({ hours });
		res.status(201).json(DashbortCreated);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const deleteDashbort = async (req, res) => {
	const dashbort = await Dashbort.findById(req.params.id);
	if (dashbort) {
		await Dashbort.deleteOne({ _id: dashbort._id });
		res
			.status(200)
			.json({ message: 'user deleted wa successfully' });
	} else {
		res.status(404);
		throw new Error('user not found');
	}
};

const getDashborts = async (req, res) => {
	const Dashborts = await Dashbort.find({});
	res.status(200).json(Dashborts);
};
const updateDashbort = async (req, res) => {
	const project = await Dashbort.findById(req.params.id);

	if (project) {
		res.json(project);
	} else {
		res.status(404);
		throw new Error('Project not found');
	}
};

module.exports = {
	deleteDashbort,
	updateDashbort,
	createDashbort,
	getDashborts,
	createHourse,
};
