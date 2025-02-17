import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/reducers/cartReducer';
import clsx from 'clsx';
import s from './AddInCart.module.css';

function AddInCart({ book, addInCartBookDet, addInCartShop }) {
	const dispatch = useDispatch();
	//  Для добавления книги в корзину
	const handleAddInCart = book => {
		dispatch(addItem(book));
	};
	return (
		<button
			onClick={() => handleAddInCart(book)}
			className={clsx(s.addInCart, {
				[s.addInCartBookDet]: addInCartBookDet,
				[s.addInCartShop]: addInCartShop,
			})}
		>
			Add cart
		</button>
	);
}

export default AddInCart;
