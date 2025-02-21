import React from 'react';
import styles from './OrderTrack.module.scss';
import Title from '../../../../common/Title/Title';
import Input from '../../../../common/Input/Input';
import ButtonForm from '../../../../common/ButtonForm/ButtonForm';

const OrderTrack = () => {
	return (
		<div className={styles.orderTrack}>
			<div className={styles.orderTrackWrapper}>
				<Title title='OrderTrack' />
				<p className={styles.orderTrackDescription}>
					To track your order please enter your Order ID in the box below and press the "Track"
					button. This was given to you on your receipt and in the confirmation email you should
					have received.
				</p>
				<form className={styles.orderTrackForm}>
					<Input type='number' placeholder='Order ID' />
					<Input type='email' placeholder='Billing Email' />
					<ButtonForm width='80%' title='TRACK' />
				</form>
			</div>
		</div>
	);
};

export default OrderTrack;
