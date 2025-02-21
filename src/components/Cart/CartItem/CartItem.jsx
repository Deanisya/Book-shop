import React, { useState } from 'react';
import styles from './CartItem.module.scss';
import { removeItem } from '../../../store/reducers/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../../common/Counter/Counter';

const CartItem = ({ item, id }) => {
	const dispatch = useDispatch();
	const handleRemove = () => {
		dispatch(removeItem(id));
	};

	if (!item) return null; // Если товара нет, не рендерим ничего

	return (
		<div className={styles.cartItem}>
			<img width={80} src={item.img} alt='img_01' />
			<div className={styles.cartItemInfo}>
				<div className={styles.cartItemMainInfo}>
					<h3 className={styles.cartItemTitle}>{item.title}</h3>
					<p className={styles.cartItemSubTitle}>{item.authors}</p>
					<p className={styles.cartItemPrice}>{item ? item.quantity * item.price : 0} $</p>
				</div>
				<Counter id={id} />
			</div>
			<button className={styles.cartItemBtn} onClick={handleRemove}>
				<svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M1 1.09172L6.90828 7M1 6.90828L6.90828 1' stroke='black' strokeWidth='1.5' />
				</svg>
			</button>
		</div>
	);
};

export default CartItem;
