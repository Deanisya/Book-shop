import React from 'react';
import s from './Counter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from '../../../store/reducers/cartReducer';

export default function ({ id }) {
	const item = useSelector(state => state.cart.items[id]);
	const dispatch = useDispatch();

	const handleDecrementCount = () => {
		dispatch(decrementCount({ id }));
	};

	const handleIncrementCount = () => {
		dispatch(incrementCount({ id }));
	};

	return (
		<div className={s.counterAddBookToCart}>
			<button className={s.counterMinus} onClick={handleDecrementCount}>
				-
			</button>
			<span>{item?.quantity}</span>
			<button className={s.counterPlus} onClick={handleIncrementCount}>
				+
			</button>
		</div>
	);
}
