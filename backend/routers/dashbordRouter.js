const {
	deleteDashbort,
	getDashborts,
	createDashbort,
	updateDashbort,
	createHourse,
} = require('../controllers/DashbortController.js');
const express = require('express');
const {
	admin,
	protect,
} = require('../midddelwars/permission.js');

const productRouter = express.Router();
const hoursRouter = express.Router();
hoursRouter.post('/', createHourse);
productRouter.post('/', createDashbort);
productRouter.get('/', getDashborts);
productRouter.delete('/:id', deleteDashbort);
productRouter.put('/id', updateDashbort);
module.exports = {
	productRouter,
	hoursRouter,
};
