import React, { useEffect, useState } from 'react';
import classes from './Order.module.scss';

const Order = () => {
	const [visible, setVisible] = useState(true);
	const [timeLeft, setTimeLeft] = useState(5);
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		if (visible) {
			let countdown = 5;

			const timerInterval = setInterval(() => {
				countdown -= 1;
				setTimeLeft(countdown);
				if (countdown === 0) clearInterval(timerInterval);
			}, 1000);

			const timeout = setTimeout(() => {
				setFadeOut(true); // Запускаем анимацию исчезновения
				setTimeout(() => setVisible(false), 1000); // Через 1 сек убираем из DOM
			}, 5000);

			return () => {
				clearInterval(timerInterval);
				clearTimeout(timeout);
			};
		}
	}, [visible]);

	return (
		<div className={classes.order}>
			{visible && (
				<div
					style={{
						opacity: fadeOut ? 0 : 1, // Изменяем opacity для плавного исчезновения
						transition: 'opacity 1s ease-in-out',
					}}
					className={classes.orderAlert}>
					<div className={classes.orderAlertInfo}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M0 10C0 4.47715 4.47715 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM8.7301 13.35L14.3501 7.73004C14.5342 7.53689 14.5342 7.23319 14.3501 7.04004L13.8201 6.51004C13.6257 6.31947 13.3145 6.31947 13.1201 6.51004L8.3801 11.25L6.8801 9.76004C6.78936 9.66336 6.66268 9.60852 6.5301 9.60852C6.39751 9.60852 6.27083 9.66336 6.1801 9.76004L5.6501 10.29C5.55544 10.3839 5.5022 10.5117 5.5022 10.645C5.5022 10.7784 5.55544 10.9062 5.6501 11L8.0301 13.35C8.12083 13.4467 8.24751 13.5016 8.3801 13.5016C8.51268 13.5016 8.63936 13.4467 8.7301 13.35Z'
								fill='#A18A68'
							/>
						</svg>
						<p>We’ve received your order</p>
					</div>
					<div className={classes.orderAlertTimer}>{timeLeft}</div>
				</div>
			)}

			<div className={classes.orderWrapper}>
				<div className={classes.orderDetails}>
					<h2 className={classes.orderDetailsTitle}>Order Details</h2>
					<div className={classes.orderDetailsWrapper}>
						<div className={classes.orderDetailsBlockLeft}>
							<div>
								<h3 className={classes.orderDetailsTitle}>ORDER NUMBER</h3>
								<p className={classes.orderDetailsSubTitle}>1879605573994</p>
							</div>
							<div>
								<h3 className={classes.orderDetailsTitle}>EMAIL</h3>
								<p className={classes.orderDetailsSubTitle}>Vitathemes@gmail.com</p>
							</div>
							<div>
								<h3 className={classes.orderDetailsTitle}>PAYMENT METHOD</h3>
								<p className={classes.orderDetailsSubTitle}>Mastercard*************7865</p>
							</div>
							<div>
								<h3 className={classes.orderDetailsTitle}>ORDER DATE</h3>
								<p className={classes.orderDetailsSubTitle}>October 8,2020</p>
							</div>
						</div>
						<div className={classes.orderDetailsBlockRight}>
							<div>
								<h3 className={classes.orderDetailsTitle}>DELIVERY OPTIONS</h3>
								<p className={classes.orderDetailsSubTitle}>Standard delivery</p>
							</div>
							<div>
								<h3 className={classes.orderDetailsTitle}>DELIVERY ADDRESS</h3>
								<p className={classes.orderDetailsSubTitle}>
									Kristian holst 34 <br /> old street W1F <br /> 7NU london <br /> United Kingdom
								</p>
								<p></p>
							</div>
							<div>
								<h3 className={classes.orderDetailsTitle}>CONTACT NUMBER</h3>
								<p className={classes.orderDetailsSubTitle}>+44 8749790988</p>
							</div>
						</div>
					</div>
				</div>
				<div className={classes.checkoutOrder}>
					<h2 className={classes.checkoutOrderTitle}>Order Summary</h2>
					<div className={classes.checkoutOrderBlock}>
						<div className={`${classes.checkoutOrderBlockList} ${classes.checkoutOrderHeader}`}>
							<h2 className={classes.checkoutOrderBlockListTitle}>PRODUCT</h2>
							<h2 className={classes.checkoutOrderBlockListTitle}>TOTAL</h2>
						</div>
						{/* <div className={classes.checkoutOrderMiddle}> */}
						<div className={classes.checkoutOrderBlockList}>
							<p className={classes.checkoutOrderBlockListSubTitle}>Lira Earrings </p>
							<span className={classes.checkoutOrderBlockListSubTitle}>$64</span>
						</div>
						<div className={classes.checkoutOrderBlockList}>
							<p className={classes.checkoutOrderBlockListSubTitle}>Ollie Earrings</p>
							<span className={classes.checkoutOrderBlockListSubTitle}>$10</span>
						</div>
						<div className={`${classes.checkoutOrderBlockList} ${classes.checkoutOrderMiddle}`}>
							<p className={classes.checkoutOrderBlockListSubTitle}>Kaede Hair Pin</p>
							<span className={classes.checkoutOrderBlockListSubTitle}>$10</span>
						</div>
						{/* </div> */}
						<div className={`${classes.checkoutOrderBlockList} ${classes.checkoutOrderMiddle}`}>
							<h2 className={classes.checkoutOrderBlockListTitle}>SUBTOTAL</h2>
							<span className={classes.checkoutOrderBlockListSubTitle}>$85</span>
						</div>
						<div className={`${classes.checkoutOrderBlockList} ${classes.checkoutOrderMiddle}`}>
							<h2 className={classes.checkoutOrderBlockListTitle}>SHIPPING</h2>
							<span className={classes.checkoutOrderBlockListSubTitle}>Free shipping</span>
						</div>
						<div className={classes.checkoutOrderBlockList}>
							<b>TOTAL</b>
							<b>$85</b>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Order;
