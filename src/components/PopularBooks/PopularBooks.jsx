import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularBooks } from '../../store/reducers/booksListReducer';
import styles from './PopularBooks.module.scss';

const PopularBooks = () => {
	const dispatch = useDispatch();
	const { popularBooks, loading, error } = useSelector(state => state.booksList);
	console.log(popularBooks);

	useEffect(() => {
		dispatch(fetchPopularBooks());
	}, [dispatch]);

	return (
		<div>
			<h1>Популярные книги</h1>

			{loading && <p>Загрузка...</p>}
			{error && <p>{error}</p>}

			<ul className={styles.listPopularBooks}>
				{popularBooks.length > 0 ? (
					popularBooks.map(book => (
						<li key={book.id}>
							{book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
								<img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title || 'Без названия'} style={{ width: '100px', height: '150px' }} />
							) : (
								<p>Изображение недоступно</p>
							)}
							<h3>{book.volumeInfo.title || 'Без названия'}</h3>
							<p>{book.volumeInfo.authors?.join(', ') || 'Неизвестные авторы'}</p>
							<p>{book.saleInfo.listPrice ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : 'Цена не указана'}</p>
						</li>
					))
				) : (
					<p>Нет доступных книг.</p>
				)}
			</ul>

			<button>Обновить список</button>
		</div>
	);
};

export default PopularBooks;
