import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../compoenents/loader.js';
import { useRegisterMutation } from '../context/usersSlice.js';
import { setCredentials } from '../context/authSlices.js';
import { toast } from 'react-toastify';

import {
	Button,
	Col,
	Container,
	Form,
	Row,
} from 'react-bootstrap';
import {
	Link,
	useLocation,
	useNavigate,
} from 'react-router-dom';
const Register = () => {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [conformpassword, setconformPassword] =
		useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [register, { isLoading }] = useRegisterMutation();
	const { userInfo } = useSelector(state => state.auth);

	const { search } = useLocation();
	const url = new URLSearchParams(search);
	const redirect = url.get('redirect') || '/';

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, redirect, userInfo]);

	const submitHandler = async e => {
		console.log(dispatch);
		e.preventDefault();
		if (password !== conformpassword) {
			toast.error('Passwords do not match');
		} else {
			try {
				const res = await register({
					name,
					email,
					password,
				}).unwrap();
				dispatch(setCredentials({ ...res }));
				navigate(redirect);
			} catch (err) {
				toast.error(err?.data?.message || err.error);
			}
		}
	};

	return (
		<>
			<Container className="mx-5">
				<h2>sign up</h2>
				<Form onSubmit={submitHandler}>
					<Form.Group className="my-3 ">
						<label>name</label>
						<Form.Control
							type="name"
							placeholder="enter email"
							value={name}
							onChange={e =>
								setName(e.target.value)
							}></Form.Control>
					</Form.Group>
					<Form.Group className="my-3 ">
						<label>email</label>
						<Form.Control
							type="email"
							placeholder="enter email"
							value={email}
							onChange={e =>
								setEmail(e.target.value)
							}></Form.Control>
					</Form.Group>

					<Form.Group className="my-3">
						<label>password</label>
						<Form.Control
							type="password"
							placeholder="enter password"
							value={password}
							onChange={e =>
								setPassword(e.target.value)
							}></Form.Control>
					</Form.Group>
					<Form.Group>
						<label>conformpassword</label>
						<Form.Control
							type="password"
							placeholder="enter password"
							value={conformpassword}
							onChange={e =>
								setconformPassword(e.target.value)
							}></Form.Control>
					</Form.Group>
					<Button
						disabled={isLoading}
						type="submit"
						variant="primary"
						className="mt-3">
						register
					</Button>
					{isLoading && <Loader />}
				</Form>
				<Row>
					<Col>
						Already have an account?{' '}
						<Link
							to={
								redirect
									? `/login?redirect=${redirect}`
									: '/login'
							}>
							Login
						</Link>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Register;
