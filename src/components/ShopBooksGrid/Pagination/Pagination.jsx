import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, setPage } from '../../../store/reducers/booksListReducer';

const Pagination = () => {
	const dispatch = useDispatch();
	const { page, loading, books } = useSelector((state) => state.booksList);

	const handlePrev = () => {
		if (page > 0) {
			dispatch(setPage(page - 1));
			dispatch(fetchBooks({ page: page - 1 }));
		}
	};

	const handleNext = () => {
		dispatch(setPage(page + 1));
		dispatch(fetchBooks({ page: page + 1 }));
	};

	return (
		<div>
			<button onClick={handlePrev} disabled={loading || page === 0}>
				Предыдущая
			</button>
			<button onClick={handleNext} disabled={loading || books.length < 20}>
				Следующая
			</button>
		</div>
	);
};

export default Pagination;
