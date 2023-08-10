import React, { useEffect } from 'react';
import {
	Col,
	Row,
	Container,
	Card,
	Button,
} from 'react-bootstrap';
import { useGetDashbortQuery } from '../context/dashbortApi.js';
import { useSelector } from 'react-redux';

const sendeToDatabase = () => {
	console.log('send to database');
};

const Department = () => {
	const { data: products } = useGetDashbortQuery();
	const { userInfo } = useSelector(state => state.auth);
	const currentUser = userInfo.name;

	return (
		<>
			<center>
				<Col md={8}>
					<Container>
						{products &&
							products.map(pro => (
								<Col
									sm={12}
									md={6}
									key={pro._id}
									className="bg bg-dark">
									{currentUser === pro.user ? (
										<Card className="my-2 p-5" md={3}>
											<Card.Body>
												<h4> department</h4>
												<Col>{pro.deperment}</Col>
												<h4>description</h4>
												<p> {pro.description}</p>
												<h4>hours</h4>
												{pro.hours} hours
												<h2>user</h2>
												<p>{pro.user}</p>
											</Card.Body>
											<Button
												className="mt-3"
												onClick={() =>
													sendeToDatabase(pro._id)
												}>
												log hours
											</Button>
										</Card>
									) : (
										''
									)}
								</Col>
							))}
					</Container>
				</Col>
			</center>
		</>
	);
};

export default Department;
