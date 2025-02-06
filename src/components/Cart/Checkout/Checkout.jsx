import React from 'react';
import classes from './Checkout.module.scss';
import Title from '../../common/Title/Title';
import Input from '../../common/Input/Input';
import ButtonForm from '../../common/ButtonForm/ButtonForm';
import { Link, Links } from 'react-router-dom';
import SelectLabels from '../../common/Select/SelectLabels';
import RadioBtn from '../../common/RadioBtn/RadioBtn';

const Checkout = () => {
	return (
		<div className={classes.checkout}>
			<Title title='Checkout' />
			<div className={classes.checkoutLogin}>
				<span className={classes.checkoutLoginTitle}>Returning customer? </span>
				<Link to='/account' className={classes.checkoutLoginBtn}>
					{' '}
					Click here to login
				</Link>
			</div>
			<div className={classes.checkoutCoupon}>
				<p className={classes.checkoutCouponTitle}>
					If you have a coupon code, please apply it below.
				</p>
				<form className={classes.checkoutCouponForm}>
					<Input placeholder='Coupon Code' />
					<ButtonForm width='40%' title='APPLY COUPON' />
				</form>
			</div>
			<div className={classes.checkoutOrderDetails}>
				<div className={classes.checkoutDetails}>
					<h2 className={classes.checkoutDetailsTitle}>Billing Details</h2>
					<form className={classes.checkoutDetailsForm}>
						<div className={classes.checkoutDetailsFormInfo}>
							<div className={classes.checkoutDetailsFormName}>
								<Input placeholder='First name *' required='required' />
								<Input placeholder='last name *' required='required' />
							</div>
							<SelectLabels />
							<Input type='text' placeholder='Street Address *' required='required' />
							<Input
								pattern='^\d+(\.\d{1,2})?$'
								type='number'
								placeholder='Postcode / ZIP *'
								required='required'
							/>
							<Input type='text' placeholder='Town / City *' required='required' />
							<Input type='number' placeholder='Phone *' required='required' />
							<Input type='email' placeholder='Email *' required='required' />
						</div>
						<div className={classes.checkoutDetailsFormBlockCheckbox}>
							<div className={classes.checkoutDetailsFormCheckbox}>
								<Input display='inline' type='checkbox' /> <span>Create an acoount?</span>
							</div>
							<div className={classes.checkoutDetailsFormCheckbox}>
								<Input display='inline' type='checkbox' /> <span>Ship to a different address?</span>
							</div>
						</div>
						<Input type='text' placeholder='Order notes' />
					</form>
				</div>
				<div className={classes.checkoutOrder}>
					<h2 className={classes.checkoutOrderTitle}>YOUR ORDER</h2>
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
						<div className={classes.checkoutOrderBlockRadio}>
							<RadioBtn />
						</div>
						<Link to='/order'>
							<ButtonForm title='PLACE ORDER' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
