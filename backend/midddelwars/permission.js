const User = require('../models/usersModel.js');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const protect = async (req, res, next) => {
	const token = req.cookies.jwt;
	console.log(token);

	if (token) {
		try {
			const decoded = jwt.verify(token, secret);

			req.user = await User.findById(decoded.userId).select(
				'-password'
			);

			next();
		} catch (error) {
			console.error(error);
			res.status(401);
			throw new Error('Not authorized, token failed');
		}
	} else {
		res.status(401);

		throw new Error('Not authorized, no token');
	}
};

// User must be an admin
const admin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401);
		throw new Error('Not authorized as an admin');
	}
};
module.exports = {
	protect,
	admin,
};
