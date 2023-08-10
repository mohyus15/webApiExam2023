const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;
mongoose.connection.once('open', async () => {
	console.log('MongoDB connection is ready');
});
mongoose.connection.on('erro', async err => {
	console.error(`something went wrong ${err}`);
});

const mangoConnect = async () => {
	await mongoose.connect(MONGO_URL);

	mongoose.set('strictQuery', true);
};

const mangoDidsconnect = async () => {
	await mongoose.disconnect();
};

module.exports = {
	mangoConnect,
	mangoDidsconnect,
};
