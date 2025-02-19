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
import Sidebar from './components/Cart/Sidebar/Sidebar';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout/Checkout';
import Order from './components/Cart/Checkout/Order/Order';
import BurgerMenu from './components/Header/BurgerMenu/BurgerMenu';

import PopularBooks from './components//PopularBooks/PopularBooks';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ShopBooksGrid from './components/ShopBooksGrid/ShopBooksGrid';
import { useEffect } from 'react';
import { useScroll } from './hooks/useScroll';
import Wishlist from './components/Wishlist/Wishlist';

const ScrollToTop = () => {
	const { pathname } = useLocation();
	const { shouldScroll } = useScroll();
	console.log('Should scroll:', shouldScroll);

	useEffect(() => {
		if (shouldScroll) {
			window.scrollTo(0, 0);
		}
	}, [pathname]);

	return null;
};

function App() {
	return (
		<Router>
			<Header />
			<Container>
				<Sidebar />
				<BurgerMenu />
				<ScrollToTop />
				<Routes>
					<Route path='/' element={<PopularBooks />} />
					<Route path='shop' element={<ShopBooksGrid />} />
					<Route path='/book/:id' element={<BookDetails />} />
					<Route path='blog' element={<BookDetails />} />
					<Route path='cart' element={<Cart />} />
					<Route path='checkout' element={<Checkout />} />
					<Route path='order' element={<Order />} />
					<Route path='contacts' element={<Contacts />} />
					<Route path='wishlist' element={<Wishlist />} />
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
