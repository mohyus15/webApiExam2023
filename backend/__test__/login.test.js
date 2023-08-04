const request = require('supertest');
const app = require('../utils/database.js');
describe('Test', () => {
	test('It should respond with 200 created user', async () => {
		await request(app).get('/api/users').expect(200);
	});
});
