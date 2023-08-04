import React from 'react';
import {
	Button,
	Col,
	Container,
	Row,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Products = () => {
	const navigate = useNavigate();
	const checkOutHandler = () => {
		navigate('/login');
	};
	return (
		<>
			<Container>
				<Row>
					<Col>list of the products</Col>
				</Row>
				<Button onClick={checkOutHandler}>see more</Button>
			</Container>
		</>
	);
};
export default Products;
