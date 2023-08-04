import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './screens/navigation.js';
import { Container } from 'react-bootstrap';
import Products from './compoenents/products.js';
import Login from './screens/login.js';
import Userslist from './admin/userslist.js';
import ProductListAdmin from './admin/productListAdmin.js';
import UserEdit from './admin/userEdit.js';
import AdminPrivatRouters from './admin/privateAdminRouter.js';
import CreateProduct from './admin/createProduct.js';
import Register from './screens/register.js';

function App() {
	return (
		<>
			<Navigation />
			<main className="py-3">
				<Container>
					<Routes>
						<Route
							index={true}
							path="/"
							element={<Products />}
						/>
						<Route path="/login" element={<Login />} />
						<Route path="register" element={<Register />} />

						<Route path="" element={<AdminPrivatRouters />}>
							<Route
								path="/productListAdmin"
								element={<ProductListAdmin />}
							/>

							<Route
								path="createProduct"
								element={<CreateProduct />}
							/>
							<Route
								path="userslist"
								element={<Userslist />}
							/>
							<Route
								path="/userEdit/:id/edit"
								element={<UserEdit />}
							/>
						</Route>
					</Routes>
				</Container>
			</main>
		</>
	);
}

export default App;
