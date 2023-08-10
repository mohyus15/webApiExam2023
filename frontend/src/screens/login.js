import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../compoenents/loader.js';
import { useLoginMutation } from '../context/usersSlice.js';
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
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [login, { isLoading }] = useLoginMutation();
	const { userInfo } = useSelector(state => state.auth);
	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get('redirect') || '/';

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, redirect, userInfo]);

	const submitHandler = async e => {
		e.preventDefault();
		try {
			const res = await login({ email, password }).unwrap();
			dispatch(setCredentials({ ...res }));
			//navigate(redirect);
		} catch (err) {
			toast.error(err?.data?.message || err.error);
		}
	};

	return (
		<>
			<Container className="mx-5">
				<h2>sign in</h2>
				<Form onSubmit={submitHandler}>
					<Form.Group className="my-3 ">
						<label>email</label>
						<Form.Control
							type="email"
							placeholder="enter email"
							value={email == null ? '' : email}
							onChange={e =>
								setEmail(e.target.value)
							}></Form.Control>
					</Form.Group>

					<Form.Group className="my-3">
						<label>password</label>
						<Form.Control
							type="password"
							placeholder="enter password"
							value={password == null ? '' : password}
							onChange={e =>
								setPassword(e.target.value)
							}></Form.Control>
					</Form.Group>
					<Button
						disabled={isLoading}
						type="submit"
						variant="primary"
						className="mt-3">
						sign up
					</Button>
					{isLoading && <Loader />}
				</Form>
				<Row>
					<Col>
						new user <Link to={'/register'}>Resgister</Link>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Login;
