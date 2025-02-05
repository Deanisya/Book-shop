import styles from './CatalogPopularBooks.module.scss';
import photo from '../../../img/book1.png';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularBooks } from '../../../store/reducers/booksListReducer';
import { Link, useNavigate } from 'react-router-dom';

function CatalogPopularBooks() {
	// const navigate = useNavigate();
	// const handleBookClick = id => {
	// 	console.log('Navigating to book with id:', id); // Для проверки какой id нам пришел
	// 	navigate(`/book/${id}`);
	// }; ------ можно навесить клик на ссылку вместо использования Link (2 способ решения) ------

	const dispatch = useDispatch();
	const { popularBooks } = useSelector(state => state.booksList);

	useEffect(() => {
		if (popularBooks.length === 0) {
			console.log('Fetching books...');
			dispatch(fetchPopularBooks());
		}
	}, [dispatch, popularBooks.length]);

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
						<div className={styles.backgroundImageBook}>
							{book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
								<img className={styles.imageBook} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title || 'Без названия'} />
							) : (
								<img src={photo} alt='Изображение книги' />
							)}
							<button className={styles.addBookToCart}>Add cart</button>
							<Link to={`/book/${book.id}`} className={styles.seeDetails}>
								See details
							</Link>
						</div>

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
