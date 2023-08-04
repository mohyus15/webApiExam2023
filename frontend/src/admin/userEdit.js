import React, { useEffect, useState } from 'react';
import Message from '../compoenents/message.js';
import { Button, Form, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Loader from '../compoenents/loader.js';

import {
	useGetUserDetailsQuery,
	useUpdateUserMutation,
} from '../context/usersSlice.js';
import { useNavigate, useParams } from 'react-router-dom';

const UserEdit = () => {
	const { id: userId } = useParams();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);

	const {
		data: user,
		isLoading,
		error,
		refetch,
	} = useGetUserDetailsQuery(userId);

	const [updateUser, { isLoading: loadingUpdate }] =
		useUpdateUserMutation();

	const navigate = useNavigate();

	const submitHandler = async e => {
		e.preventDefault();
		try {
			await updateUser({ userId, name, email, isAdmin });
			toast.success('user updated successfully');
			refetch();
			navigate('/userslist');
		} catch (err) {
			toast.error(err?.data?.message || err.error);
		}
	};

	useEffect(() => {
		if (user) {
			setName(user.name);
			setEmail(user.email);
			setIsAdmin(user.isAdmin);
		}
	}, [user]);

	return (
		<>
			<Container>
				<h1>Edit User</h1>
				{loadingUpdate && <Loader />}
				{isLoading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">
						{error?.data?.message || error.error}
					</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group className="my-2" controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="name"
								placeholder="Enter name"
								value={name}
								onChange={e =>
									setName(e.target.value)
								}></Form.Control>
						</Form.Group>

						<Form.Group className="my-2" controlId="email">
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								value={email}
								onChange={e =>
									setEmail(e.target.value)
								}></Form.Control>
						</Form.Group>

						<Form.Group
							className="my-2"
							controlId="isadmin">
							<Form.Check
								type="checkbox"
								label="Is Admin"
								checked={isAdmin}
								onChange={e =>
									setIsAdmin(e.target.checked)
								}></Form.Check>
						</Form.Group>

						<Button type="submit" variant="primary">
							Update
						</Button>
					</Form>
				)}
			</Container>
		</>
	);
};

export default UserEdit;
