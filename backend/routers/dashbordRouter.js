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

productRouter.post('/', createDashbort);
productRouter.post('/hours', createHourse);
productRouter.get('/', getDashborts);
productRouter.delete('/:id', deleteDashbort);
productRouter.put('/id', updateDashbort);
module.exports = productRouter;
