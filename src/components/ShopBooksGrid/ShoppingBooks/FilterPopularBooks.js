import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularBooks } from '../../../store/reducers/booksListReducer';
import RenderBooks from '../../common/RenderBooks/RenderBooks';

function FilterPopularBooks() {
	const dispatch = useDispatch();
	const { filterPopularBooks } = useSelector(state => state.booksList);

	useEffect(() => {
		if (filterPopularBooks.length === 0) {
			console.log('Fetching books...');
			dispatch(fetchPopularBooks());
		}
	}, [dispatch, filterPopularBooks.length]);

	return <RenderBooks books={filterPopularBooks} />;
}

export default FilterPopularBooks;
