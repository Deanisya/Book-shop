import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Blur from '../Blur/Blur';
import { clearCart, removeItem } from '../../../store/reducers/cartReducer';

// import Cart from '../Cart';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Counter from '../../common/Counter/Counter';

export default function () {
	const isSidebarOpen = useSelector(state => state.cart.isSidebarOpen);

	useEffect(() => {
		if (isSidebarOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isSidebarOpen]);

	const items = useSelector(state => state.cart.items);
	// const cart = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<>
			{isSidebarOpen && <Blur />}
			<div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
				<div className={styles.sidebarCartHeader}>
					<h1 className={styles.cartTitle}>Shopping bag</h1>
					<h2 className={styles.cartSubTitle}>5 items</h2>
				</div>
				{/* <div className={styles.cartItems}>
					<CartItem />
				</div> */}
				{Object.entries(items).map(([id, item]) => (
					// <div className={styles.cartItems} key={id}>
					// 	<h3>{item.name}</h3>
					// 	<p>Цена: {item ? item.price * item.quantity : 0} ₽</p>

					// 	<Counter item={item} id={id} />

					// 	<button onClick={() => dispatch(removeItem(id))}>Удалить</button>
					// </div>
					<CartItem item={item} id={id} />
				))}
				<div className={styles.sidebarCartFooter}>
					<div className={styles.sidebarCartFooterInfo}>
						<span className={styles.sidebarCartFooterTitle}>Subtotal (5 items)</span>
						<span className={styles.sidebarCartFooterPrice}>$ 100,00 </span>
					</div>
					<Link to='cart'>
						<button className={styles.sidebarCartFooterBtn} onClick={handleClearCart}>
							VIEW CART
						</button>
					</Link>
				</div>
			</div>
			{/* <Cart /> */}
		</>
	);
}
