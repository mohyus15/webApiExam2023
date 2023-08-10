const request = require('supertest');
const app = require('../app.js');

const {
	mangoDidsconnect,
	mangoConnect,
} = require('../utils/database.js');

describe('Test POST /dashbort', () => {
	beforeAll(async () => {
		await mangoConnect();
	}),
		afterAll(async () => {
			await mangoDidsconnect();
		});

	const completeData = {};

	const DataWithInvalidDate = {
		user: 'Ali',
		deperment: 'accouting',
		description:
			'kake kan du lage hjemme eller kan du ta en tur min butikk i Oslo',
	};
	test('It should respond with 201 created', async () => {
		await request(app).post('/api/darshbort').send({
			user: 'Ali',
			deperment: 'accouting',
			description:
				'kake kan du lage hjemme eller kan du ta en tur min butikk i Oslo',
			hours: 20,
		});
		expect(201);
	});
});
