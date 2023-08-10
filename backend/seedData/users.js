const bcrypt = require('bcryptjs');
const users = [
	{
		name: 'admin',
		email: 'admin@hotmail.com',
		password: bcrypt.hashSync('123456', 10),
		deperment: 'Manager',
		isAdmin: true,
	},
	{
		name: 'sensur',
		email: 'sensur@hotmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
		deperment: 'Manager',
	},
	{
		name: 'Mo',
		email: 'Mo@hotmail.com',
		password: bcrypt.hashSync('123456', 10),
		deperment: 'finance',
		isAdmin: false,
	},
	{
		name: 'Ola',
		email: 'Ola@hotmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
		deperment: 'finance',
	},
	{
		name: 'Erik',
		email: 'Erik@hotmail.com',
		password: bcrypt.hashSync('123456', 10),
		deperment: 'finance',
		isAdmin: false,
	},
	{
		name: 'Row',
		email: 'Row@hotmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
		deperment: 'accounting',
	},
];

module.exports = users;
