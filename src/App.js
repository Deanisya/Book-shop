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
import OrderTrack from './components/Cart/Checkout/Order/OrderTrack/OrderTrack';
import Dashboard from './components/Account/Dashboard/Dashboard';
import PopularBooks from './components//PopularBooks/PopularBooks';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ShopBooksGrid from './components/ShopBooksGrid/ShopBooksGrid';
import { useEffect } from 'react';
import Wishlist from './components/Wishlist/Wishlist';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
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
					<Route path='/Book-shop' element={<PopularBooks />} />
					<Route path='shop' element={<ShopBooksGrid />} />
					<Route path='/book/:id' element={<BookDetails />} />
					<Route path='blog' element={<BookDetails />} />
					<Route path='cart' element={<Cart />} />
					<Route path='checkout' element={<Checkout />} />
					<Route path='wishlist' element={<Wishlist />} />
					<Route path='account' element={<Account />} />
					<Route path='order' element={<Order />} />
					<Route path='ordertrack' element={<OrderTrack />} />
					<Route path='contacts' element={<Contacts />} />
					<Route path='dashboard' element={<Dashboard />} />
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
