import React from 'react';
import {
	Container,
	Navbar,
	Nav,
	Badge,
	NavDropdown,
} from 'react-bootstrap';
import { FaShoppingBag, FaUser } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

function Navigation() {
	return (
		<Navbar bg="light" expand="md">
			<Container>
				<Navbar.Brand href="/">web name</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="/cart">cart</Nav.Link>

						<Nav.Link href="/login">
							<FaUser />
							login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
