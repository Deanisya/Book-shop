import React from 'react';
import styles from './Cart.module.scss';
import CartItem from './CartItem/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, decrementCount, incrementCount, removeItem } from '../../store/reducers/cartReducer';
import Title from '../common/Title/Title';
import ButtonForm from '../common/ButtonForm/ButtonForm';
import { Link } from 'react-router-dom';
import EmptyBlock from '../common/EmptyBlock/EmptyBlock';
import Counter from '../common/Counter/Counter';

const Cart = () => {
	const { items, totalPrice } = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const handleRemove = id => {
		dispatch(removeItem(id));
	};
	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className={styles.cart}>
			<Title title='Shopping Cart' />
			<div className={styles.cartItems}>
				{Object.keys(items).length === 0 ? (
					<EmptyBlock title='Cart is empty...' />
				) : (
					<div className={styles.cartItemWrapper}>
						{Object.entries(items).map(([id, item]) => (
							<div key={id} className={styles.cartItem}>
								<img className={styles.cartItemImg} src={item.img} alt='img_01' />
								<div className={styles.cartItemMainInfo}>
									<div>
										<h3 className={styles.cartItemTitle}>{item.title}</h3>
										<p className={styles.cartItemSubTitle}>{item.author}</p>
									</div>
									<div className={styles.cartItemInfoPrice}>
										<Counter id={id} />
										<p className={styles.cartItemPrice}>{item ? item.price * item.quantity : 0} $</p>
									</div>
								</div>

								<button className={styles.cartItemBtn} onClick={() => handleRemove(id)}>
									<svg width='12' height='12' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path d='M1 1.09172L6.90828 7M1 6.90828L6.90828 1' stroke='black' strokeWidth='1.5' />
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
									<span className={styles.cartTotalPrice}>{totalPrice} $</span>
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
