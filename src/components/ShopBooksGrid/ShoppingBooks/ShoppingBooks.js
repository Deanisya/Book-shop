import React from 'react';
import { useSelector } from 'react-redux';
import RenderBooks from '../../common/RenderBooks/RenderBooks';
import Pagination from './Pagination/Pagination';

function ShoppingBooks() {
	const { books, loading } = useSelector(state => state.booksList);

	return (
		<>
			<RenderBooks books={books} />
			{loading || books.length === 0 ? null : <Pagination />}
		</> // не понимаю почему при отсутствии книг, пагинация всё равно присутствует
	);
}

export default ShoppingBooks;
