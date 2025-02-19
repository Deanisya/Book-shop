import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import RangeSlider from '../RangeSlider/RangeSlider';
import SwitchSection from '../../SwitchSection/SwitchSection';
import DropdownFilter from '../../DropdownFilter/DropdownFilter';

function FilterSection() {
	return (
		<>
			<SearchBar />
			<DropdownFilter />
			<RangeSlider />
			<SwitchSection />
		</>
	);
}

export default FilterSection;
