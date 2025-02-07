import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Blur from '../Blur/Blur';
import { clearCart, removeItem } from '../../../store/reducers/cartReducer';

// import Cart from '../Cart';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Counter from '../../common/Counter/Counter';
import { openSidebar } from '../../../store/reducers/cartReducer';

export default function () {
	const { isSidebarOpen, totalPrice, totalQuantity } = useSelector(state => state.cart);

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

	return (
		<>
			{isSidebarOpen && <Blur />}
			<div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
				<div className={styles.sidebarCartHeader}>
					<h1 className={styles.cartTitle}>Shopping bag</h1>
					<h2 className={styles.cartSubTitle}>{totalQuantity} items</h2>
				</div>
				<div className={styles.cartItems}>
					{Object.entries(items).map(([id, item]) => (
						<CartItem item={item} id={id} />
					))}
				</div>

				<div className={styles.sidebarCartFooter}>
					<div className={styles.sidebarCartFooterInfo}>
						<span className={styles.sidebarCartFooterTitle}>Subtotal ({totalQuantity} items)</span>
						<span className={styles.sidebarCartFooterPrice}>$ {totalPrice} </span>
					</div>
					<Link to='cart'>
						<button className={styles.sidebarCartFooterBtn} onClick={() => dispatch(openSidebar(false))}>
							VIEW CART
						</button>
					</Link>
				</div>
			</div>
			{/* <Cart /> */}
		</>
	);
}
