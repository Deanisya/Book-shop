import React, { useEffect } from 'react';
import styles from './RenderBooks.module.scss';
import photo from '../../../img/book1.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../store/reducers/cartReducer';
import { useScroll } from '../../../hooks/useScroll';
import { fetchBooks, incrementPage } from '../../../store/reducers/booksListReducer';

function RenderBooks({ books }) {
	const { loading, error, query, page } = useSelector(state => state.booksList);
	const { toggleScroll } = useScroll();
	const dispatch = useDispatch();

	useEffect(() => {
		if (page > 0) {
			// При изменении страницы, загружаем новые книги
			dispatch(fetchBooks({ searchQuery: query, page }));
		}
	}, [page, query, dispatch]);

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

	const handleLoadMore = () => {
		const currentScrollPosition = window.scrollY; // Сохраняем текущую позицию прокрутки

		toggleScroll(false);
		dispatch(incrementPage()); // Увеличиваем страницу
		dispatch(fetchBooks({ searchQuery: query, page: page + 1 })).finally(() => {
			// Восстанавливаем позицию прокрутки после загрузки
			window.scrollTo(0, currentScrollPosition);
			toggleScroll(true);
		});
	};

	return (
		<>
			{books.length > 0 ? (
				<ul className={styles.listPopularBooks}>
					{books.map(book => (
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
							</div>

							<h2 className={styles.titleBook} title={book.volumeInfo.title}>
								{shortenTitle(book.volumeInfo.title || 'Без названия', 25)}
							</h2>
							<p className={styles.authorBook} title={book.volumeInfo.authors}>
								{book.volumeInfo.authors?.join(', ').slice(0, 40).concat('...') || 'Неизвестные авторы'}
							</p>
							<p className={styles.priceBook}>{book.saleInfo.listPrice ? `${Math.round(book.saleInfo.listPrice.amount)} $` : 'Распродано'}</p>
						</li>
					))}
				</ul>
			) : (
				<p>Книг не найдено...</p>
			)}
			{!loading && (
				<button onClick={handleLoadMore} className={styles.loadMoreButton}>
					Загрузить ещё
				</button>
			)}
		</>
	);
}

export default RenderBooks;
