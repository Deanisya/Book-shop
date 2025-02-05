import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import styles from './ShopBooksGrid.module.scss';
import ShoppingBooks from './ShoppingBooks/ShoppingBooks';
import DropdownFilter from '../DropdownFilter/DropdownFilter';
import RangeSlider from '../RangeSlider/RangeSlider';
import SwitchSection from '../SwitchSection/SwitchSection';

function ShopBooksGrid() {
	return (
		<div className={styles.gridContainer}>
			<div>
				{/* filter section */}
				<SearchBar />
				<DropdownFilter />
				<RangeSlider />
				<SwitchSection />
			</div>

			<div>
				<ShoppingBooks />
			</div>
		</div>
	);
}

export default ShopBooksGrid;
