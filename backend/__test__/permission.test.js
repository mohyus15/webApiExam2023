const request = require('supertest');
describe('testing midellware  post ', () => {
	const validUser = {
		name: 'admin',
		email: 'admin@hotmail.com',
		password: '123456',
		isAdmin: true,
	};

	it('should test /register for a valid request and return 201 status code and accessToken and refreshToken through cookies', async () => {
		const resp = await request
			.post('/api/users')
			.send(validUser);
		const cookies = resp.headers['set-cookie'];
		console.log(cookies);
	});
});
