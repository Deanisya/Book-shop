import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CartIcon.module.scss';

const CartIcon = () => {
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	return <>{totalQuantity > 0 && <span className={styles.CartIcon}>{totalQuantity}</span>}</>;
};

export default CartIcon;
