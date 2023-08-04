const request = require('supertest');
const app = require('../app.js');
describe('Test api for login', () => {
	test('It should respond with 200 created login', async () => {
		await request(app).get('/api/users').expect(200);
	});
});
