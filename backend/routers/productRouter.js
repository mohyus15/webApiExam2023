const {
	deleteDashbort,
	getDashborts,
	createDashbort,
	updateDashbort,
} = require('../controllers/DashbortController.js');
const express = require('express');
const {
	admin,
	protect,
} = require('../midddelwars/permission.js');

const productRouter = express.Router();
productRouter.post('/', createDashbort);
productRouter.get('/', getDashborts);
productRouter.delete('/:id', deleteDashbort);
productRouter.put('/id', updateDashbort);
module.exports = productRouter;
