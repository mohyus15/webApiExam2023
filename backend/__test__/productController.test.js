const request = require('supertest');

const {
	mangoDidsconnect,
	mangoConnect,
} = require('../utils/database.js');
const app = require('../app.js');
describe('test GET products', () => {
	beforeAll(async () => {
		await mangoConnect();
	}),
		afterAll(async () => {
			await mangoDidsconnect();
		});

	test('The GET /status route should give status code 200', async () => {
		const response = await request(app).get(
			'/api/products'
		);
		expect(200);
	});
});
describe('test POST products', () => {
	const sampleData = {
		image:
			'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',

		brand: '2020',
	};

	test('The GET /status route should give status code 201', async () => {
		const response = await request(app)
			.post('/products')
			.send(sampleData);

		expect(201);
	});
});
