const request = require('supertest');
const app = require('../app.js');
const {
	mangoDidsconnect,
	mangoConnect,
} = require('../utils/database.js');

describe('Test POST /products', () => {
	beforeAll(async () => {
		await mangoConnect();
	}),
		afterAll(async () => {
			await mangoDidsconnect();
		});

	const completeDishesData = {
		name: 'kake',
		price: 30,
		text: 'kake kan du lage hjemme eller kan du ta en tur min butikk i Oslo',
	};
	const dishesDataWithoutDate = {};

	const dishesDataWithInvalidDate = {
		name: 'canjeero',
		price: 22,
		text: '',
		tr: 'ff',
	};
	test('It should respond with 201 created', async () => {
		await request(app)
			.post('/api/products')
			.send(completeDishesData);
		expect(201);
	});

	test('dishes api', async () => {
		await request(app)
			.get('/api/products')
			.expect('Content-Type', /json/)
			.expect(200);
	});
});
