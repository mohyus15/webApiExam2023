import React, { useEffect, useState } from 'react';
import {
	Container,
	Form,
	Button,
	Col,
} from 'react-bootstrap';
import { useCreateDashbortMutation } from '../context/dashbortApi.js';
import Loader from '../compoenents/loader.js';
import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../context/usersSlice.js';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function CreateDeparments() {
	const { data: users } = useGetUsersQuery();
	const [deperment, setDeperment] = useState('accouting');
	const [description, setDescription] = useState();
	const [user, setUser] = useState();
	const [hours, setHours] = useState(0);

	const navigate = useNavigate();

	const [createDashbort, { isLoading }] =
		useCreateDashbortMutation();

	const obj = {
		deperment,
		user,
		description,
		hours,
	};
	const onSubmitHandler = async e => {
		console.log(obj);
		try {
			let result = await createDashbort(obj).unwrap();
			toast.success('you have log hours in ' + hours);
			navigate('/dashbort');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Container>
				<Col>
					<Form onSubmit={onSubmitHandler}>
						<Form.Group className="InputField">
							<Form.Label>Level</Form.Label>
							<Form.Control
								as="select"
								value={deperment}
								onChange={event =>
									setDeperment(event.target.value)
								}>
								<option value="finance">finance</option>
								<option value="accouting">accouting</option>
								<option value="Human Resources">
									Human Resources
								</option>
							</Form.Control>
						</Form.Group>
						<Form.Group className="InputField">
							<Form.Label>user</Form.Label>
							<Form.Control
								as="select"
								value={user}
								name={user}
								onChange={event =>
									setUser(event.target.value)
								}>
								{users &&
									users.map(users => (
										<option key={users.name}>
											{users.name}
										</option>
									))}
							</Form.Control>
						</Form.Group>

						<Form.Group className="my-3 ">
							<label>description</label>
							<Form.Control
								ControlId="description"
								type="text"
								name="description"
								value={description}
								onChange={e =>
									setDescription(e.target.value)
								}></Form.Control>
						</Form.Group>

						<Form.Group className="my-3 ">
							<label>housers</label>
							<Form.Control
								ControlId="hoursers"
								type="number"
								name="hourses"
								value={hours}
								onChange={e =>
									setHours(e.target.value)
								}></Form.Control>
						</Form.Group>
						<Button onClick={onSubmitHandler}>
							create
						</Button>
						{isLoading && <Loader />}
					</Form>
				</Col>
			</Container>
		</>
	);
}

export default CreateDeparments;
