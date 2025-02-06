import React from 'react';
import styles from './Cart.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem } from '../../store/reducers/cartReducer';
import Counter from '../common/Counter/Counter';
import Title from '../common/Title/Title';
import Input from '../common/Input/Input';
import ButtonForm from '../common/ButtonForm/ButtonForm';
import img01 from '../../img/Img 01.png';
import { Link } from 'react-router-dom';

const Cart = () => {
	const items = useSelector(state => state.cart.items);
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
			<Title title='Shopping Cart' />
			{/* {Object.entries(items).map(([id, item]) => (
				<div key={id}>
					<h3>{item.name}</h3>
					<p>Цена: {item ? item.price * item.quantity : 0} ₽</p>

					<Counter item={item} id={id} />

					<button onClick={() => handleRemove(id)}>Удалить</button>
				</div>
			))}
			<p>Общая стоимость: {cart.totalPrice} ₽</p>
			<button onClick={handleClearCart}>Clear Cart</button> */}
			<div className={styles.cartItems}>
				<div className={styles.cartItemWrapper}>
					<div className={styles.cartItem}>
						<img src={img01} alt='img_01' />

						<div className={styles.cartItemInfo}>
							<div className={styles.cartItemMainInfo}>
								<h3 className={styles.cartItemTitle}>Lira Earrings</h3>
								<p className={styles.cartItemSubTitle}>Black / Medium</p>
							</div>
							<div className={styles.cartItemInfoPrice}>
								<Counter />
								<p className={styles.cartItemPrice}>$ 20,00</p>
							</div>
						</div>

						<button className={styles.cartItemBtn} onClick={() => handleRemove()}>
							<svg width='12' height='12' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M1 1.09172L6.90828 7M1 6.90828L6.90828 1' stroke='black' stroke-width='1.5' />
							</svg>
						</button>
					</div>
				</div>
				<div className={styles.cartItemWrapper}>
					<div className={styles.cartItem}>
						<img src={img01} alt='img_01' />

						<div className={styles.cartItemInfo}>
							<div className={styles.cartItemMainInfo}>
								<h3 className={styles.cartItemTitle}>Lira Earrings</h3>
								<p className={styles.cartItemSubTitle}>Black / Medium</p>
							</div>
							<div className={styles.cartItemInfoPrice}>
								<Counter />
								<p className={styles.cartItemPrice}>$ 20,00</p>
							</div>
						</div>

						<button className={styles.cartItemBtn} onClick={() => handleRemove()}>
							<svg width='12' height='12' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M1 1.09172L6.90828 7M1 6.90828L6.90828 1' stroke='black' stroke-width='1.5' />
							</svg>
						</button>
					</div>
				</div>
				<div className={styles.cartItemWrapper}>
					<div className={styles.cartItem}>
						<img src={img01} alt='img_01' />

						<div className={styles.cartItemInfo}>
							<div className={styles.cartItemMainInfo}>
								<h3 className={styles.cartItemTitle}>Lira Earrings</h3>
								<p className={styles.cartItemSubTitle}>Black / Medium</p>
							</div>
							<div className={styles.cartItemInfoPrice}>
								<Counter />
								<p className={styles.cartItemPrice}>$ 20,00</p>
							</div>
						</div>

						<button className={styles.cartItemBtn} onClick={() => handleRemove()}>
							<svg width='12' height='12' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M1 1.09172L6.90828 7M1 6.90828L6.90828 1' stroke='black' stroke-width='1.5' />
							</svg>
						</button>
					</div>
				</div>
				<div className={styles.cartItemWrapper}>
					<div className={styles.cartItem}>
						<img src={img01} alt='img_01' />

						<div className={styles.cartItemInfo}>
							<div className={styles.cartItemMainInfo}>
								<h3 className={styles.cartItemTitle}>Lira Earrings</h3>
								<p className={styles.cartItemSubTitle}>Black / Medium</p>
							</div>
							<div className={styles.cartItemInfoPrice}>
								<Counter />
								<p className={styles.cartItemPrice}>$ 20,00</p>
							</div>
						</div>

						<button className={styles.cartItemBtn} onClick={() => handleRemove()}>
							<svg width='12' height='12' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M1 1.09172L6.90828 7M1 6.90828L6.90828 1' stroke='black' stroke-width='1.5' />
							</svg>
						</button>
					</div>
				</div>
				<div className={styles.cartItemWrapper}>
					<div className={styles.cartItem}>
						<img src={img01} alt='img_01' />

						<div className={styles.cartItemInfo}>
							<div className={styles.cartItemMainInfo}>
								<h3 className={styles.cartItemTitle}>Lira Earrings</h3>
								<p className={styles.cartItemSubTitle}>Black / Medium</p>
							</div>
							<div className={styles.cartItemInfoPrice}>
								<Counter />
								<p className={styles.cartItemPrice}>$ 20,00</p>
							</div>
						</div>

						<button className={styles.cartItemBtn} onClick={() => handleRemove()}>
							<svg width='12' height='12' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M1 1.09172L6.90828 7M1 6.90828L6.90828 1' stroke='black' stroke-width='1.5' />
							</svg>
						</button>
					</div>
				</div>
				<div className={styles.cartCouponWrapper}>
					<div className={styles.clearCart}>
						<button className={styles.clearCartBtn}>CLEAR CART</button>
					</div>
					<div className={styles.cartTotal}>
						<div className={styles.cartTotalWrapper}>
							<span className={styles.cartTotalTitle}>TOTAL</span>
							<span className={styles.cartTotalPrice}>100$</span>
						</div>
						<Link to='/checkout'>
							<ButtonForm title='PROCEED TO CHECKOUT' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
