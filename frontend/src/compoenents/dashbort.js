import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {
	useGetDashbortQuery,
	useDeleteDashDeparmentMutation,
} from '../context/dashbortApi.js';
import Loader from './loader.js';
import Message from './message.js';
import { useDispatch } from 'react-redux';

const Products = () => {
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const [deleteDashDeparment] =
		useDeleteDashDeparmentMutation();
	const {
		data: products,
		isLoading,
		error,
	} = useGetDashbortQuery('');
	const deleteHandel = id => {
		dispatch(deleteDashDeparment(id));
		navigation('/');
	};
	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">
					{error?.data?.Message || error.error}
				</Message>
			) : (
				<>
					<Row>
						<Link
							to={`/createDeparments`}
							className="btn btn-dark">
							create department
						</Link>

						{products.map(pro => (
							<Col
								sm={12}
								md={6}
								lg={4}
								xl={3}
								key={pro._id}>
								<Card className="my-2 p-2">
									<Card.Body>
										<h4> department</h4>
										<Col>{pro.deperment}</Col>
										<h4>description</h4>
										<p style={style}> {pro.description}</p>
										<h4>user</h4>
										<p>{pro.user}</p>
									</Card.Body>
									<Button
										className="mt-3"
										onClick={() => deleteHandel(pro._id)}>
										delete
									</Button>
								</Card>
							</Col>
						))}
					</Row>
				</>
			)}
		</>
	);
};

const style = {
	marginBottom: '30px',
	fontFamily: 'fantasy',
};
export default Products;
