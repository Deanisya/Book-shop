import React from 'react';
import MaterialUISwitch from './MaterialUISwitch';

function SwitchSection() {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '35px 0' }}>
			<p style={{ margin: 0 }}>In stock</p>
			<MaterialUISwitch />
		</div>
	);
}

export default SwitchSection;
