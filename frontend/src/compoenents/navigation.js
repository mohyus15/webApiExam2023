import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar bg="light" expand="md">
			<Container>
				<Navbar.Brand href="/">Buy a book</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="/cart">cart</Nav.Link>

						<Nav.Link href="/login">login</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
