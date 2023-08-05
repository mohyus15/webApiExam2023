const bcrypt = require('bcryptjs');
const users = [
	{
		name: 'admin',
		email: 'admin@hotmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'sensur',
		email: 'sensur@hotmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Mo',
		email: 'Mo@hotmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
	},
	{
		name: 'Ola',
		email: 'Ola@hotmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
	},
];

module.exports = users;
