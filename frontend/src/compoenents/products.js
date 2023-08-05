import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../context/productsApi.js';
import Loader from '../compoenents/loader.js';
import Message from '../compoenents/message.js';

const Products = () => {
	const {
		data: products,
		isLoading,
		error,
	} = useGetProductsQuery();
	console.log(products);
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
					<h1 style={style}>The best books for sale</h1>
					<Row>
						{products.map(pro => (
							<Col
								sm={12}
								md={6}
								lg={4}
								xl={3}
								key={pro._id}>
								<Card className="my-2 p-2">
									<Link to={`/productDetals/${pro._id}`}>
										<Card.Img
											src={pro.image}
											variant="top"
											width={80}
											height={200}
										/>

										<Card.Body>
											<Card.Title className="product-title">
												<strong style={style}>
													{pro.name}
												</strong>
											</Card.Title>
											<Card.Text as="h3" style={style}>
												{pro.brand}
											</Card.Text>
										</Card.Body>
									</Link>
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
