import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import styles from './ShopBooksGrid.module.scss';
import ShoppingBooks from './ShoppingBooks/ShoppingBooks';
import DropdownFilter from '../DropdownFilter/DropdownFilter';

function ShopBooksGrid() {
	const [searchQuery, setSearchQuery] = useState(''); // Состояние для поискового запроса

	return (
		<div className={styles.gridContainer}>
			<div>
				<SearchBar setSearchQuery={setSearchQuery} />
				<DropdownFilter />
			</div>

			<div>
				<ShoppingBooks query={searchQuery} />
			</div>
		</div>
	);
}

export default ShopBooksGrid;
