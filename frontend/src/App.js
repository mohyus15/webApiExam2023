import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './screens/navigation.js';
import { Container } from 'react-bootstrap';
import Dashbort from './compoenents/dashbort.js';
import Login from './screens/login.js';
import Userslist from './admin/userslist.js';

import UserEdit from './admin/userEdit.js';
import AdminPrivatRouters from './admin/privateAdminRouter.js';
import Register from './screens/register.js';
import PrivatRouters from './private/privateRouters.js';
import Department from './private/department.js';
import CreateDeparments from './admin/createDeparments.js';

function App() {
	return (
		<>
			<Navigation />

			<main className="py-3">
				<Container>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="register" element={<Register />} />

						<Route path="" element={<AdminPrivatRouters />}>
							<Route
								path="/createDeparments"
								element={<CreateDeparments />}
							/>

							<Route
								index={true}
								path="/dashbort"
								element={<Dashbort />}
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
						<Route path="" element={<PrivatRouters />}>
							<Route
								path="/deperment"
								element={<Department />}
							/>
						</Route>
					</Routes>
				</Container>
			</main>
		</>
	);
}

export default App;
