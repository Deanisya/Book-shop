import React, { useState } from 'react';
import styles from './ShopBooksGrid.module.scss';
import ShoppingBooks from './ShoppingBooks/ShoppingBooks';
import FilterSection from '../ShopBooksGrid/FilterSection/FilterSection';
import TuneIcon from '@mui/icons-material/Tune';

function ShopBooksGrid() {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const handleOpenFilter = () => {
		setIsFilterOpen(prev => !prev);
	};
	return (
		<div className={styles.gridContainer}>
			<button className={styles.filterSectionIsMobile} onClick={handleOpenFilter}>
				<TuneIcon />
			</button>
			{isFilterOpen && <FilterSection />}
			<div className={styles.filterSection}>
				{/* filter section */}
				<FilterSection />
			</div>

			<div>
				<ShoppingBooks />
			</div>
		</div>
	);
}

export default ShopBooksGrid;
