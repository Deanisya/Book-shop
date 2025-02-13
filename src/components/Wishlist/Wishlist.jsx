import React from 'react';
import styles from './Wishlist.module.scss';
import Title from '../common/Title/Title';
import ButtonForm from '../common/ButtonForm/ButtonForm';
import { useDispatch, useSelector } from 'react-redux';
import book1 from '../../img/book1.png';
import { addItem } from '../../store/reducers/cartReducer';
import { removeFromFavorites } from '../../store/reducers/booksListReducer';

const Wishlist = () => {
	const favorites = useSelector(state => state.booksList.favorites);
	const dispatch = useDispatch();

	const handleAddInCart = book => {
		dispatch(addItem(book));
	};
	const handleRemoveFromFavorites = id => {
		dispatch(removeFromFavorites(id));
	};

	return (
		<div className={styles.wishlist}>
			<Title title='Your Wishlist' />
			{favorites.length >= 1 ? (
				<table>
					<thead>
						<tr>
							<th></th>
							<th>PRODUCT NAME</th>
							<th>PRICE</th>
							<th>STOCK STATUS</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{favorites.map(book => (
							<tr key={book.id}>
								<td>
									<button style={{ border: 'none', background: 'transparent' }} onClick={() => handleRemoveFromFavorites(book.id)}>
										x
									</button>
								</td>
								<td>
									<div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '300px' }}>
										<img src={book.volumeInfo.imageLinks?.thumbnail || `${book1}`} alt={book.volumeInfo.title || 'No name'} />
										{book.volumeInfo.title || 'No name'}
									</div>
								</td>
								<td>{book.saleInfo.listPrice ? `${Math.round(book.saleInfo.listPrice.amount)} $` : 'Sold'}</td>
								<td>{book.saleInfo.listPrice ? 'In stock' : 'Sold'}</td>
								<td>
									<ButtonForm title='ADD CART' onClick={handleAddInCart} book={book} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div>Your wishlist is empty</div>
			)}
		</div>
	);
};

export default Wishlist;
