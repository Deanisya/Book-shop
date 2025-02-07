import React from 'react';
import styles from './Cart.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem } from '../../store/reducers/cartReducer';
import Counter from '../common/Counter/Counter';
import Title from '../common/Title/Title';
import ButtonForm from '../common/ButtonForm/ButtonForm';
import { Link } from 'react-router-dom';

const Cart = () => {
	const { items, totalPrice } = useSelector(state => state.cart);
	console.log(items);

	const cart = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const handleRemove = id => {
		dispatch(removeItem(id));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className={styles.cart}>
			<div className={styles.cartItems}>
				{Object.keys(items).length === 0 ? (
					<div className={styles.cartEmpty}>Cart is empty . . .</div>
				) : (
					<div className={styles.cartItemWrapper}>
						<Title title='Shopping Cart' />
						{Object.entries(items).map(([id, item]) => (
							<div key={id} className={styles.cartItem}>
								<div className={styles.cartInfo}>
									<img width={80} height={120} src={item.img} alt='img_01' />
									<div className={styles.cartItemInfo}>
										<h3 className={styles.cartItemTitle}>{item.title}</h3>
										<p className={styles.cartItemSubTitle}>{item.authors}</p>
									</div>
								</div>

								<div className={styles.cartItemInfoPrice}>
									<Counter id={id} />
									<p className={styles.cartItemPrice}>{item ? item.quantity * item.price : 0} $</p>
								</div>

								<button className={styles.cartItemBtn} onClick={() => handleRemove(id)}>
									<svg width='12' height='12' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path d='M1 1.09172L6.90828 7M1 6.90828L6.90828 1' stroke='black' stroke-width='1.5' />
									</svg>
								</button>
							</div>
						))}
						<div className={styles.cartCouponWrapper}>
							<div className={styles.clearCart}>
								<button onClick={handleClearCart} className={styles.clearCartBtn}>
									CLEAR CART
								</button>
							</div>
							<div className={styles.cartTotal}>
								<div className={styles.cartTotalWrapper}>
									<span className={styles.cartTotalTitle}>TOTAL</span>
									<span className={styles.cartTotalPrice}>{totalPrice}</span>
								</div>
								<Link to='/checkout'>
									<ButtonForm title='PROCEED TO CHECKOUT' />
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
