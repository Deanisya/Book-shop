import React from 'react';
import styles from './CartIcon.module.scss';

const CartIcon = ({ quantity }) => {
	console.log(quantity);
	// const totalQuantity = useSelector(state => state.cart.totalQuantity);
	return <>{quantity > 0 && <span className={styles.CartIcon}>{quantity}</span>}</>;
};

export default CartIcon;
