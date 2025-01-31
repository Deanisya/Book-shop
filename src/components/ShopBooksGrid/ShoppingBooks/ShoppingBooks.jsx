import React, { useEffect } from 'react';
import CatalogPopularBooks from '../../PopularBooks/CatalogPopularBooks/CatalogPopularBooks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../../store/reducers/booksListReducer';

function ShoppingBooks({ query }) {
	const dispatch = useDispatch();
	const { books, loading, error } = useSelector(state => state.booksList);

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
	if (books.length === 0) {
		return <p>Нет книг по вашему запросу</p>;
	}

	// Отображаем список книг
	return (
		<ul>
			{books.map((book, index) => (
				<li key={index}>
					<h3>{book.volumeInfo.title}</h3>
					<p>{book.volumeInfo.authors?.join(', ')}</p>
				</li>
			))}
		</ul>
	);
}

export default ShoppingBooks;
