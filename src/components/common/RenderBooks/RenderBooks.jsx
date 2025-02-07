import React from 'react';
import styles from './RenderBooks.module.scss';
import photo from '../../../img/book1.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../store/reducers/cartReducer';

function RenderBooks({ books }) {
	// books , popular books
	const { loading, error } = useSelector(state => state.booksList);
	const dispatch = useDispatch();
	// Если идет загрузка
	if (loading) {
		return <p>Загрузка...</p>;
	}
	// Если ошибка
	if (error) {
		return <p>Ошибка загрузки: {error}</p>;
	}

	function shortenTitle(title, maxLength) {
		if (title.length > maxLength) {
			return title.slice(0, maxLength) + '...';
		}
		return title;
	} // функция чтобы укоротить слишком длинный заголовок книги

	const handleAddInCart = book => {
		dispatch(addItem(book));
	};

	return (
		<ul className={styles.listPopularBooks}>
			{books.length > 0 ? (
				books.map(book => (
					<li className={styles.popularBook} key={book.id}>
						<div className={styles.backgroundImageBook}>
							{book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
								<img className={styles.imageBook} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title || 'Без названия'} />
							) : (
								<img className={styles.imageBook} src={photo} alt='Изображение книги' />
							)}
							<button onClick={() => handleAddInCart(book)} className={styles.addBookToCart}>
								Add cart
							</button>
							<Link to={`/book/${book.id}`} className={styles.seeDetails}>
								See details
							</Link>
						</div>

						<h2 className={styles.titleBook} title={book.volumeInfo.title}>
							{shortenTitle(book.volumeInfo.title || 'Без названия', 30)}
						</h2>
						<p className={styles.authorBook}>{book.volumeInfo.authors?.join(', ') || 'Неизвестные авторы'}</p>
						<p className={styles.priceBook}>{book.saleInfo.listPrice ? `${Math.round(book.saleInfo.listPrice.amount)} $` : 'Распродано'}</p>
					</li>
				))
			) : (
				<p>Нет доступных книг.</p>
			)}
		</ul>
	);
}

export default RenderBooks;
