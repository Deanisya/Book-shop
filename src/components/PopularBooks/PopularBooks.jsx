import React from 'react';
import { useSelector } from 'react-redux';

import styles from './PopularBooks.module.scss';
import CatalogPopularBooks from './CatalogPopularBooks/CatalogPopularBooks';
import LinkAllProducts from './LinkAllProducts/LinkAllProducts';
import UncontrolledExample from '../bootstrapComponents/UncontrolledExample';

const PopularBooks = () => {
	const { loading, error } = useSelector(state => state.booksList);

	return (
		<div>
			<UncontrolledExample />
			<div className={styles.catalogBooksBlock}>
				<div className={styles.titleBlock}>
					<span className={styles.line}></span>
					<h1 className={styles.title}>Popular Books</h1>
					<span className={styles.line}></span>
				</div>

				{loading && <p>Загрузка...</p>}
				{error && <p>{error}</p>}
				<CatalogPopularBooks />
				<LinkAllProducts />
			</div>
		</div>
	);
};

export default PopularBooks;
