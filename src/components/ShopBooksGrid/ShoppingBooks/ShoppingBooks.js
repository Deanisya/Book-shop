import React from 'react';
import { useSelector } from 'react-redux';

import RenderBooks from '../../common/RenderBooks/RenderBooks';
import FilterPopularBooks from './FilterPopularBooks';

function ShoppingBooks() {
	const { books, isSearching } = useSelector(state => state.booksList);

	// Если нет поискового запроса, показываем популярные книги
	if (!isSearching) {
		return <FilterPopularBooks />;
	}

	// Если книги найдены, отображаем их
	// setTimeout(() => {
	// 	if (books.length === 0) {
	// 		return <p>Нет книг по вашему запросу</p>;
	// 	}
	// }, 2000);

	return <RenderBooks books={books} />;
}

export default ShoppingBooks;
