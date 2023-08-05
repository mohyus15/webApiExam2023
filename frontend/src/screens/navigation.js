import React from 'react';
import {
	Container,
	Navbar,
	Nav,
	NavDropdown,
} from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { logout } from '../context/authSlices.js';
import { useLogoutMutation } from '../context/usersSlice.js';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Navigation() {
	const { userInfo } = useSelector(state => state.auth);
	const [logoutApiCall] = useLogoutMutation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			navigate('/login');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Navbar bg="light" expand="md">
			<Container>
				<Navbar.Brand href="/">web name</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						{userInfo ? (
							<NavDropdown
								className="ml-2"
								title={userInfo.name}
								id="username">
								<Nav.Link href="/profile">profile</Nav.Link>
								<Nav.Link onClick={logoutHandler}>
									logout
								</Nav.Link>
							</NavDropdown>
						) : (
							<Nav.Link href="/login">
								<FaUser />
								login
							</Nav.Link>
						)}
						{userInfo && userInfo.isAdmin && (
							<NavDropdown title="Lists" id="adminMenu">
								<Nav.Link href="/userslist">
									userlist
								</Nav.Link>

								<Nav.Link href="/productListAdmin">
									productlist
								</Nav.Link>
							</NavDropdown>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
