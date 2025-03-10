import React from 'react';
import styles from './Pagination.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, setPage } from '../../../../store/reducers/booksListReducer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Pagination = () => {
	const dispatch = useDispatch();
	const { page, loading, books } = useSelector(state => state.booksList);

	const handlePrev = () => {
		if (page > 0) {
			dispatch(setPage(page - 1));
			dispatch(fetchBooks({ page: page - 1 }));
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const handleNext = () => {
		dispatch(setPage(page + 1));
		dispatch(fetchBooks({ page: page + 1 }));
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className={styles.paginationWrapper}>
			<button className={styles.paginationBtn} onClick={handlePrev} disabled={loading || page === 0}>
				<ArrowBackIosIcon />
			</button>
			<button className={styles.paginationBtn} onClick={handleNext} disabled={loading || books.length < 20}>
				<ArrowForwardIosIcon />
			</button>
		</div>
	);
};

export default Pagination;
