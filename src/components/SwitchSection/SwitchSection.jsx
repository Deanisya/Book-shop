import React from 'react';
import MaterialUISwitch from './MaterialUISwitch';
import { useDispatch } from 'react-redux';
import { toggleFilterByPrice } from '../../store/reducers/booksListReducer';

function SwitchSection() {
	const dispatch = useDispatch();
	const handleInStock = () => {
		dispatch(toggleFilterByPrice());
	};
	return (
		<div style={{ margin: '35px 0', display: 'flex', flexDirection: 'column', gap: '15px' }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<p style={{ margin: 0 }}>On sale</p>
				<MaterialUISwitch />
			</div>
			<div onClick={handleInStock} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<p style={{ margin: 0 }}>In stock</p>
				<MaterialUISwitch />
			</div>
		</div>
	);
}

export default SwitchSection;
