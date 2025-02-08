import React from 'react';
import s from './Counter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from '../../../store/reducers/cartReducer';

export default function ({ id }) {
	const item = useSelector(state => state.cart.items[id]); // Получаем текущий товар из Redux
	const dispatch = useDispatch();

	const handleDecrementCount = () => {
		dispatch(decrementCount({ id }));
	};

	const handleIncrementCount = () => {
		dispatch(incrementCount({ id }));
	};

	// if (!item) return null; // Если товара нет, не рендерим ничего

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
// <div>
// 	<button onClick={handleDecrementCount} disabled={item.quantity === 0}>
// 		-
// 	</button>
// 	<span>{item.quantity}</span>
// 	<button onClick={handleIncrementCount}>+</button>
// </div>
// <div className={s.counterAddBookToCart}>
// 	<button className={s.counterMinus} onClick={handleDecrementCount}>
// 		-
// 	</button>
// 	<span className={s.count}>{item.quantity}</span>
// 	<button className={s.counterPlus} onClick={handleIncrementCount}>
// 		+
// 	</button>
// </div>
//
