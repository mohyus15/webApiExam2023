const url = 'http://localhost:8000';

export const PostData = async ({ name, price, text }) => {
	try {
		const res = await fetch(`/api/products'`, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ name, price, text }),
		});

		return res.json();
	} catch (error) {
		console.log('noe har gått galt');
	}
};

export const NewUser = async ({
	name,
	email,
	password,
}) => {
	try {
		const result = await fetch(`${url}/api/users`, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ name, email, password }),
		});
		return result.json();
	} catch (error) {
		console.log('something went wrong in your code!!');
	}
};

export const postLogin = async ({ email, password }) => {
	try {
		const result = await fetch('/api/users', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ email, password }),
		});
		return result.json();
	} catch (error) {
		console.log('something went wrong in your login!');
	}
};

export const GetAdmin = async () => {
	const response = await fetch(`${url}/admin`);
	const data = await response.json();
	return data;
};

export const GetData = async () => {
	const response = await fetch(`${url}/api/products`);
	const data = await response.json();
	return data;
};

export const DeleteData = id => {
	fetch(`${url}/${id}`, {
		method: 'DELETE',
	}).then(data => {
		return data;
	});
};

// registertion into this application
