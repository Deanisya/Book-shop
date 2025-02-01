import './App.css';
import Account from './/components/Account/Account';
import Password from './components/Account/Password/Password';
import BookDetails from './components/BookDetails/BookDetails';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Container from './components/common/Container/Container';

import PopularBooks from './components//PopularBooks/PopularBooks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopBooksGrid from './components/ShopBooksGrid/ShopBooksGrid';

function App() {
	return (
		<Router>
			<Container>
				<Header />
				<Routes>
					<Route path='/' element={<PopularBooks />} />
					<Route path='shop' element={<ShopBooksGrid />} />
					<Route path='blog' element={<BookDetails />} />
					<Route path='contacts' element={<Contacts />} />
					<Route path='cart' element={<BookDetails />} />
					<Route path='wishlist' element={<BookDetails />} />
					<Route path='account' element={<Account />} />
					<Route path='password' element={<Password />} />
					<Route path='privacy' element={<PrivacyPolicy />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Container>
		</Router>
	);
}

export default App;
