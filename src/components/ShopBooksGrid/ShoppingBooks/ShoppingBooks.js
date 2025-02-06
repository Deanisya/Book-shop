import React, { useEffect } from 'react';
// import CatalogPopularBooks from '../../PopularBooks/CatalogPopularBooks/CatalogPopularBooks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../../store/reducers/booksListReducer';
import RenderBooks from '../../common/RenderBooks/RenderBooks';
import FilterPopularBooks from './FilterPopularBooks';

function ShoppingBooks() {
	const dispatch = useDispatch();
	const { books, query } = useSelector(state => state.booksList);

	// Загружаем книги при изменении поискового запроса
	useEffect(() => {
		if (query) {
			dispatch(fetchBooks({ searchQuery: query }));
		}
	}, [dispatch, query]);

	// Если нет поискового запроса, показываем популярные книги
	if (!query) {
		return <FilterPopularBooks />;
	}

	// Если книги найдены, отображаем их
	setTimeout(() => {
		if (books.length === 0) {
			return <p>Нет книг по вашему запросу</p>;
		}
	}, 2000);

	return <RenderBooks books={books} />;
}

export default ShoppingBooks;
