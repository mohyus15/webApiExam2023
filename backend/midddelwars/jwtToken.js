const jwt = require('jsonwebtoken');
const secret = 'BESTAPP2023';
const generateToken = (res, userId) => {
	const accessToken = jwt.sign({ userId }, secret, {
		expiresIn: '30d',
	});

	return res.cookie('jwt', accessToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV !== 'development',
		sameSite: 'strict',
		maxAge: 30 * 24 * 60 * 60 * 1000,
	});
};

module.exports = {
	generateToken,
};
