import React, { useState } from 'react';
import s from './Counter.module.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrementCount, incrementCount } from '../../../store/reducers/cartReducer';

export default function ({ id }) {
	// const item = useSelector((state) => state.cart.items[id]); // Получаем текущий товар из Redux
	// const dispatch = useDispatch();

	// const handleDecrementCount = () => {
	// 	dispatch(decrementCount({ id }));
	// };

	// const handleIncrementCount = () => {
	// 	dispatch(incrementCount({ id }));
	// };

	// if (!item) return null; // Если товара нет, не рендерим ничего

	const [count, setCount] = useState(1);
	const handleDecrement = () => setCount((prev) => prev - 1);
	const handleIncrement = () => setCount((prev) => prev + 1);

	return (
		// <div>
		// 	<button onClick={handleDecrementCount} disabled={item.quantity === 0}>
		// 		-
		// 	</button>
		// 	<span>{item.quantity}</span>
		// 	<button onClick={handleIncrementCount}>+</button>
		// </div>
		<div className={s.counterAddBookToCart}>
			<button className={s.counterMinus} onClick={handleDecrement}>
				-
			</button>
			<span className={s.count}>{count}</span>
			<button className={s.counterPlus} onClick={handleIncrement}>
				+
			</button>
		</div>
	);
}
