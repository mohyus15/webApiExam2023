const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const NODE_ENV = process.env.NODE;

//manger roles
const productRouter = require('./routers/dashbordRouter.js');
const userRouters = require('./routers/userRouters.js');

const app = express();
app.use(cors());
app.use(
	express.json({
		origin: 'http://localhost:3000',
	})
);
app.use(express.json());
app.use(
	express.static(path.join(__dirname, '..', 'public'))
);

app.use(morgan('combined'));
app.use('/api/users', userRouters);
app.use('/api/darshbort', productRouter);
app.use('/api/hours', productRouter);
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
	app.use(
		express.static(path.join(__dirname, '/frontned/build'))
	);
	app.get('/*', (req, res) => {
		res.sendFile(
			path.resolve(
				__dirname,
				'frontend',
				'build',
				'index.html'
			)
		);
	});
} else {
	app.use('/', (req, res) => {
		res.send('the server is running...');
	});
}

module.exports = app;
