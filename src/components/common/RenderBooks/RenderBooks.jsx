import React, { useEffect } from 'react';
import styles from './RenderBooks.module.scss';
import photo from '../../../img/book1.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../../store/reducers/booksListReducer';
import MyFavorites from '../MyFavorites/MyFavorites';
import AddInCart from '../AddInCart/AddInCart';
import EmptyBlock from '../EmptyBlock/EmptyBlock';

function RenderBooks({ books }) {
	const { loading, error, category } = useSelector(state => state.booksList);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBooks({ category }));
	}, [category, dispatch]);

	if (loading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<>
			{books.length > 0 ? (
				<ul className={styles.listPopularBooks}>
					{books.map(book => {
						return (
							<li className={styles.popularBook} key={book.id}>
								<div className={styles.backgroundImageBook}>
									{book.volumeInfo.imageLinks?.thumbnail ? (
										<img className={styles.imageBook} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title || 'Без названия'} />
									) : (
										<img className={styles.imageBook} src={photo} alt='Изображение книги' />
									)}
									{book.saleInfo.listPrice ? <AddInCart book={book} addInCartShop /> : <p className={styles.sold}>Sold out</p>}

									<Link to={`/book/${book.id}`} className={styles.seeDetails}>
										See details
									</Link>
									<MyFavorites book={book} styleFavorite />
								</div>

								<h2 className={styles.titleBook} title={book.volumeInfo.title}>
									{book.volumeInfo.title.slice(0, 30).concat('...') || 'Без названия'}
								</h2>
								<p className={styles.authorBook} title={book.volumeInfo.authors}>
									{book.volumeInfo.authors?.join(', ').slice(0, 40).concat('...') || 'Неизвестные авторы'}
								</p>
								<p className={styles.priceBook}>{book.saleInfo.listPrice ? `${Math.round(book.saleInfo.listPrice.amount)} $` : 'Sold'}</p>
							</li>
						);
					})}
				</ul>
			) : (
				<EmptyBlock title='Don`t find books' />
			)}
		</>
	);
}

export default RenderBooks;
