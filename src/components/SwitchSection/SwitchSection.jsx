import React from 'react';
import MaterialUISwitch from './MaterialUISwitch';
import { useDispatch } from 'react-redux';

function SwitchSection() {
	const dispatch = useDispatch();
	const handleInStock = () => {
		// dispatch(toggleFilterByInStock());
	};
	return (
		<div onClick={handleInStock} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '35px 0' }}>
			<p style={{ margin: 0 }}>In stock</p>
			<MaterialUISwitch />
		</div>
	);
}

export default SwitchSection;
