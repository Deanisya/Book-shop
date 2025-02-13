import React, { useEffect } from 'react';
import styles from './RenderBooks.module.scss';
import photo from '../../../img/book1.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../store/reducers/cartReducer';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { addToFavorites, fetchBooks, removeFromFavorites } from '../../../store/reducers/booksListReducer';

function RenderBooks({ books }) {
	const { loading, error, query, page, favorites, category } = useSelector(state => state.booksList);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBooks({ searchQuery: query, category, page }));
	}, [query, category, page, dispatch]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	//  Для сокращения заголовка
	function shortenTitle(title, maxLength) {
		return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
	}

	//  Для добавления книги в корзину
	const handleAddInCart = book => {
		dispatch(addItem(book));
	};

	const toggleFavorites = book => {
		const isFavorites = favorites.some(fav => fav.id === book.id);
		if (isFavorites) {
			dispatch(removeFromFavorites(book.id));
		} else {
			dispatch(addToFavorites(book));
		}
	};

	return (
		<>
			{books.length > 0 ? (
				<ul className={styles.listPopularBooks}>
					{books.map(book => {
						const isFavorites = favorites.some(fav => fav.id === book.id);
						return (
							<li className={styles.popularBook} key={book.id}>
								<div className={styles.backgroundImageBook}>
									{book.volumeInfo.imageLinks?.thumbnail ? (
										<img className={styles.imageBook} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title || 'Без названия'} />
									) : (
										<img className={styles.imageBook} src={photo} alt='Изображение книги' />
									)}
									{book.saleInfo.listPrice ? (
										<button onClick={() => handleAddInCart(book)} className={styles.addBookToCart}>
											Add cart
										</button>
									) : (
										<button className={styles.addBookToCart}>Товара нет</button>
									)}

									<Link to={`/book/${book.id}`} className={styles.seeDetails}>
										See details
									</Link>
									<button className={styles.favoritesBtn} onClick={() => toggleFavorites(book)}>
										<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} checked={isFavorites} onChange={() => toggleFavorites(book)} />
									</button>
								</div>

								<h2 className={styles.titleBook} title={book.volumeInfo.title}>
									{shortenTitle(book.volumeInfo.title || 'Без названия', 25)}
								</h2>
								<p className={styles.authorBook} title={book.volumeInfo.authors}>
									{book.volumeInfo.authors?.join(', ').slice(0, 40).concat('...') || 'Неизвестные авторы'}
								</p>
								<p className={styles.priceBook}>{book.saleInfo.listPrice ? `${Math.round(book.saleInfo.listPrice.amount)} $` : 'Распродано'}</p>
							</li>
						);
					})}
				</ul>
			) : (
				<p>Книг не найдено...</p>
			)}
		</>
	);
}

export default RenderBooks;
