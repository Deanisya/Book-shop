import React from 'react';
import styles from './Wishlist.module.scss';
import Title from '../common/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import book1 from '../../img/book1.png';
import { removeFromFavorites } from '../../store/reducers/booksListReducer';
import { Link } from 'react-router-dom';
import AddInCart from '../common/AddInCart/AddInCart';
import { useMediaQuery } from '@mui/material';
import EmptyBlock from '../common/EmptyBlock/EmptyBlock';

const Wishlist = () => {
	const favorites = useSelector(state => state.booksList.favorites);
	console.log(favorites);

	const isMobile = useMediaQuery('(max-width:768px)');
	const dispatch = useDispatch();

	const handleRemoveFromFavorites = id => {
		console.log(`id поиск книги: ${id}`);
		dispatch(removeFromFavorites(id));
	};
	return (
		<div className={styles.blockWishlist}>
			<Title title='Your Wishlist' />

			{favorites.length >= 1 ? (
				<>
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
										<Link to={`/book/${book.id}`} className={styles.seeDetails}>
											<div className={styles.imgBlock} title={book.volumeInfo.title}>
												<img className={styles.img} src={book.volumeInfo.imageLinks?.thumbnail || `${book1}`} alt={book.volumeInfo.title || 'No name'} />
												{book.volumeInfo.title.slice(0, 50).concat('...') || 'No name'}
											</div>
										</Link>
									</td>
									<td>{book.saleInfo.listPrice ? `${Math.round(book.saleInfo.listPrice.amount)} $` : 'Sold'}</td>
									<td>{book.saleInfo.listPrice ? 'In stock' : 'Sold'}</td>
									<td>{book.saleInfo.listPrice ? <AddInCart formBtn book={book} /> : <p style={{ margin: 0 }}>Sold out</p>}</td>
								</tr>
							))}
						</tbody>
					</table>

					{isMobile && (
						<ul className={styles.cardList}>
							{favorites.map(book => (
								<li className={styles.card}>
									<div className={styles.imgBlockMobile} title={book?.volumeInfo?.title}>
										<img className={styles.imgMobile} src={book.volumeInfo.imageLinks?.thumbnail || `${book1}`} alt={book.volumeInfo.title || 'No name'} />
										<div className={styles.descrBook}>
											<Link to={`/book/${book.id}`} className={styles.seeDetails}>
												{book.volumeInfo.title.slice(0, 50).concat('...') || 'No name'}
											</Link>
											<p style={{ margin: 0 }}>{book.saleInfo.listPrice ? `${Math.round(book.saleInfo.listPrice.amount)} $` : 'Sold'}</p>
										</div>
									</div>
									<button className={styles.btnRemoveFromFav} style={{ border: 'none', background: 'transparent' }} onClick={() => handleRemoveFromFavorites(book.id)}>
										x
									</button>

									{book.saleInfo.listPrice ? (
										<AddInCart formBtn book={book} />
									) : (
										<p className={styles.sold} style={{ margin: 0 }}>
											Sold out
										</p>
									)}
								</li>
							))}
						</ul>
					)}
				</>
			) : (
				<EmptyBlock title='Your wishlist is empty...' />
			)}
		</div>
	);
};

export default Wishlist;
