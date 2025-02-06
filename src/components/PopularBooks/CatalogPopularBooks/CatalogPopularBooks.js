import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularBooks } from '../../../store/reducers/booksListReducer';
import RenderBooks from '../../common/RenderBooks/RenderBooks';

function CatalogPopularBooks() {
	const dispatch = useDispatch();
	const { popularBooks } = useSelector(state => state.booksList);

	useEffect(() => {
		if (popularBooks.length === 0) {
			console.log('Fetching books...');
			dispatch(fetchPopularBooks());
		}
	}, [dispatch, popularBooks.length]);

	return <RenderBooks books={popularBooks} />;
}

export default CatalogPopularBooks;
