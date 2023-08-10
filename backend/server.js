const http = require('http');
const app = require('./app.js');
require('dotenv').config();
const { mangoConnect } = require('./utils/database.js');
const port = process.env.PORT || 5000;
const mode = process.env.NODE;
const server = http.createServer(app);

const startServer = async () => {
	await mangoConnect();
	server.listen(port, () => {
		console.log(
			`the mode is ${mode} and lisning to ${port}... `
		);
	});
};
startServer();
