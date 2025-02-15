import React from 'react';
import { useSelector } from 'react-redux';

import styles from './PopularBooks.module.scss';
import CatalogPopularBooks from './CatalogPopularBooks/CatalogPopularBooks';
import LinkAllProducts from './LinkAllProducts/LinkAllProducts';
import UncontrolledExample from '../bootstrapComponents/UncontrolledExample';
import RandomQuoteOfTheDay from '../RandomQuoteOfTheDay/RandomQuoteOfTheDay';

const PopularBooks = () => {
	return (
		<div style={{ paddingTop: '5rem' }}>
			<UncontrolledExample />
			<RandomQuoteOfTheDay />
			<div className={styles.catalogBooksBlock}>
				<div className={styles.titleBlock}>
					<span className={styles.line}></span>
					<h2 className={styles.title}>Popular Books</h2>
					<span className={styles.line}></span>
				</div>
				<CatalogPopularBooks />
				<LinkAllProducts />
			</div>
		</div>
	);
};

export default PopularBooks;
