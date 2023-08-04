import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import {
	FaTimes,
	FaEdit,
	FaTrash,
	FaCheck,
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import {
	useGetUsersQuery,
	useDeleteUserMutation,
} from '../context/usersSlice.js';
import { Link } from 'react-router-dom';
const Userslist = () => {
	const { data } = useGetUsersQuery();
	const [deleteUser, refetch] = useDeleteUserMutation();

	const deleteHandler = async id => {
		if (window.confirm('are your sure you want delete')) {
			try {
				await deleteUser(id);
				toast.success('user is deleted');
				refetch();
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<div>
			<>
				<Container>
					<h2>All users in database</h2>
					<Table
						striped="bordered hover responsive"
						className="table-sm">
						<thead>
							<tr>
								<th>id</th>
								<th>name</th>
								<th>email</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{data &&
								data.map(user => (
									<tr key={user._id}>
										<td>{user._id}</td>
										<td>{user.name}</td>
										<td>{user.email}</td>
										<td>
											{user.isAdmin ? (
												<FaCheck
													style={{ color: 'green' }}
												/>
											) : (
												<FaTimes style={{ color: 'red' }} />
											)}
											<Link
												to={`/userEdit/${user._id}/edit`}>
												<Button
													variant="light"
													className="btn-sm mx-3">
													<FaEdit />
												</Button>
											</Link>
											<Button
												onClick={() =>
													deleteHandler(user._id)
												}
												variant="danger"
												className="btn-sm">
												<FaTrash
													style={{ color: 'white' }}
												/>
											</Button>
										</td>
									</tr>
								))}
						</tbody>
					</Table>
				</Container>
			</>
		</div>
	);
};

export default Userslist;
