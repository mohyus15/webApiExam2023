import React, { useEffect, useState } from 'react';
import {
	Col,
	Row,
	Form,
	Container,
	Card,
	Button,
} from 'react-bootstrap';
import {
	useCreateHoursMutation,
	useGetDashbortQuery,
} from '../context/dashbortApi.js';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Department = () => {
	const [hours, setHours] = useState();
	const { data: products } = useGetDashbortQuery();
	const [createHours, { isLoading }] =
		useCreateHoursMutation();
	const { userInfo } = useSelector(state => state.auth);
	const currentUser = userInfo.name;
	const sendeToDatabase = async () => {
		await createHours(hours).unwrap();
		toast.success('you have log hours in ' + hours);
	};

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
											<Form.Group className="InputField">
												<Form.Label>user</Form.Label>
												<Form.Control
													type="number"
													as="select"
													ControlId="hours"
													value={hours}
													name={hours}
													onChange={event =>
														setHours(event.target.value)
													}>
													{products &&
														products.map(user => (
															<option key={user._id}>
																{user.hours}
															</option>
														))}
												</Form.Control>
											</Form.Group>
											<Button
												className="mt-3"
												onClick={sendeToDatabase}>
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
