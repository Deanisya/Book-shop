import styles from './CatalogPopularBooks.module.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularBooks } from '../../../store/reducers/booksListReducer';
import photo from '../../../img/book1.png';

function CatalogPopularBooks() {
	const dispatch = useDispatch();
	const { popularBooks } = useSelector(state => state.booksList);

	useEffect(() => {
		dispatch(fetchPopularBooks());
	}, [dispatch]);

	function shortenTitle(title, maxLength) {
		if (title.length > maxLength) {
			return title.slice(0, maxLength) + '...';
		}
		return title;
	} // функция чтобы укоротить слишком длинный заголовок книги
	return (
		<ul className={styles.listPopularBooks}>
			{popularBooks.length > 0 ? (
				popularBooks.map(book => (
					<li className={styles.popularBook} key={book.id}>
						{book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
							<div className={styles.backgroundImageBook}>
								<img className={styles.imageBook} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title || 'Без названия'} />
								<button className={styles.addBookToCart}>Add cart</button>
							</div>
						) : (
							<img src={photo}></img>
						)}

						<h2 className={styles.titleBook} title={book.volumeInfo.title}>
							{shortenTitle(book.volumeInfo.title || 'Без названия', 30)}
						</h2>
						<p className={styles.authorBook}>{book.volumeInfo.authors?.join(', ') || 'Неизвестные авторы'}</p>
						<p className={styles.priceBook}>{book.saleInfo.listPrice ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : 'Распродано'}</p>
					</li>
				))
			) : (
				<p>Нет доступных книг.</p>
			)}
		</ul>
	);
}

export default CatalogPopularBooks;
