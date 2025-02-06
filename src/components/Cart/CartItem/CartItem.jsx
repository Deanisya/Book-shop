import React, { useState } from 'react';
import styles from './CartItem.module.scss';
import { removeItem } from '../../../store/reducers/cartReducer';
import img01 from '../../../img/Img 01.png';
import { useDispatch } from 'react-redux';

const CartItem = ({ item, id }) => {
	// const [count, setCount] = useState(1);
	// const handleDecrement = () => setCount((prev) => prev - 1);
	// const handleIncrement = () => setCount((prev) => prev + 1);

	const dispatch = useDispatch();

	const handleRemove = () => {
		dispatch(removeItem(id));
	};
	return (
		<div className={styles.cartItem}>
			<img src={item.img} alt='img_01' />
			<div className={styles.cartItemInfo}>
				<div className={styles.cartItemMainInfo}>
					<h3 className={styles.cartItemTitle}>{item.title}</h3>
					<p className={styles.cartItemSubTitle}>Black / Medium</p>
					<p className={styles.cartItemPrice}>{item.price}</p>
				</div>
				{/* <div className={styles.cartItemTotalQuantity}>
					<span className={styles.cartItemTotalQuantityTitle}>QTY:</span>
					<button className={styles.cartItemTotalQuantityBtnMinusPlus} onClick={handleDecrement}>
						-
					</button>
					<span className={styles.cartItemTotalQuantityCount}>{count}</span>
					<button className={styles.cartItemTotalQuantityBtnMinusPlus} onClick={handleIncrement}>
						+
					</button>
				</div> */}
			</div>
			<button className={styles.cartItemBtn} onClick={handleRemove}>
				<svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M1 1.09172L6.90828 7M1 6.90828L6.90828 1' stroke='black' stroke-width='1.5' />
				</svg>
			</button>
		</div>
	);
};

export default CartItem;
