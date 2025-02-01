import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import styles from './SearchBar.module.scss';
import { fetchBooks, setQuery } from '../../../store/reducers/booksListReducer';

const SearchBar = () => {
	const dispatch = useDispatch();
	const { query } = useSelector(state => state.booksList);

	const debouncedFetchBooks = useCallback(
		debounce(searchQuery => {
			if (searchQuery.trim().length > 0) {
				dispatch(fetchBooks({ searchQuery, startIndex: 0 }));
			}
		}, 500),
		[dispatch]
	);

	// Слушаем изменения query и вызываем debouncedFetchBooks
	useEffect(() => {
		if (query.trim().length > 0) {
			debouncedFetchBooks(query);
		}
		return () => {
			debouncedFetchBooks.cancel();
		};
	}, [debouncedFetchBooks, query]);

	// При клике на кнопку, выполняем поиск с текущим запросом
	const handleSearch = () => {
		if (query.trim().length > 0) {
			dispatch(fetchBooks({ searchQuery: query, startIndex: 0 }));
		}
	};

	return (
		<div className={styles.searchBar}>
			<input type='text' value={query} onChange={e => dispatch(setQuery(e.target.value))} placeholder='Search book...' />
			<button onClick={handleSearch}>
				<svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M15.6431 13.9576L19.8645 18.1823C20.053 18.3919 20.0437 18.7128 19.8434 18.9111L19.1047 19.6504C19.0056 19.7504 18.8707 19.8066 18.73 19.8066C18.5893 19.8066 18.4544 19.7504 18.3553 19.6504L14.1339 15.4257C14.0172 15.3087 13.9112 15.1815 13.8173 15.0454L13.0258 13.9893C11.7162 15.0359 10.0898 15.6057 8.41388 15.6052C4.96034 15.6172 1.95934 13.233 1.18757 9.86415C0.415791 6.49527 2.07921 3.04081 5.19304 1.54592C8.30686 0.0510231 12.0401 0.914654 14.1825 3.62551C16.3249 6.33638 16.3047 10.171 14.1339 12.8591L15.1893 13.5879C15.3541 13.6935 15.5063 13.8175 15.6431 13.9576ZM3.13727 8.21165C3.13727 11.1282 5.49976 13.4926 8.41405 13.4926C9.81354 13.4926 11.1557 12.9362 12.1453 11.9459C13.1349 10.9555 13.6908 9.61225 13.6908 8.21165C13.6908 5.29506 11.3283 2.93069 8.41405 2.93069C5.49976 2.93069 3.13727 5.29506 3.13727 8.21165Z'
						fill='black'
					/>
				</svg>
			</button>
		</div>
	);
};

export default SearchBar;
