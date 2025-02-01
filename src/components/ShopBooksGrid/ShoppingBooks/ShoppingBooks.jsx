import React, { useEffect } from 'react';
import CatalogPopularBooks from '../../PopularBooks/CatalogPopularBooks/CatalogPopularBooks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../../store/reducers/booksListReducer';
import styles from './ShoppingBooks.module.scss';
import photo from '../../../img/book1.png';

function ShoppingBooks() {
	const dispatch = useDispatch();
	const { books, loading, error, query } = useSelector(state => state.booksList);

	// Загружаем книги при изменении поискового запроса
	useEffect(() => {
		if (query) {
			dispatch(fetchBooks({ searchQuery: query }));
		}
	}, [dispatch, query]);

	// Если нет поискового запроса, показываем популярные книги
	if (!query) {
		return <CatalogPopularBooks />;
	}

	// Если идет загрузка
	if (loading) {
		return <p>Загрузка...</p>;
	}

	// Если ошибка
	if (error) {
		return <p>Ошибка загрузки: {error}</p>;
	}

	// Если книги найдены, отображаем их
	setTimeout(() => {
		if (books.length === 0) {
			return <p>Нет книг по вашему запросу</p>;
		}
	}, 2000);

	function shortenTitle(title, maxLength) {
		if (title.length > maxLength) {
			return title.slice(0, maxLength) + '...';
		}
		return title;
	} // функция чтобы укоротить слишком длинный заголовок книги

	// Отображаем список книг
	return (
		<ul className={styles.listPopularBooks}>
			{books.map(book => (
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
						{shortenTitle(book.volumeInfo.title || 'Без названия', 20)}
					</h2>
					<p className={styles.authorBook}>{book.volumeInfo.authors?.join(', ') || 'Неизвестные авторы'}</p>
					<p className={styles.priceBook}>{book.saleInfo.listPrice ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : 'Распродано'}</p>
				</li>
			))}
		</ul>
	);
}

export default ShoppingBooks;
