import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './compoenents/navigation.js';
import { Container } from 'react-bootstrap';
import Products from './compoenents/products.js';
import Login from './screens/login.js';

function App() {
	return (
		<>
			<Navigation />
			<main>
				<Container>
					<Routes>
						<Route path="/" element={<Products />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</Container>
			</main>
		</>
	);
}

export default App;
