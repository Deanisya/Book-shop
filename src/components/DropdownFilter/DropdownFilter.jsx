import React, { useState } from 'react';

const DropdownFilter = () => {
	const [selectedOption, setSelectedOption] = useState('all');

	const handleChange = event => {
		setSelectedOption(event.target.value);
	};

	return (
		<div>
			<select value={selectedOption} onChange={handleChange}>
				<option value='all'>All</option>
				<option value='fruit'>Fruits</option>
				<option value='vegetable'>Vegetables</option>
			</select>
		</div>
	);
};

export default DropdownFilter;
