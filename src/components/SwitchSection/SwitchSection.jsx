import React from 'react';
import MaterialUISwitch from './MaterialUISwitch';

function SwitchSection() {
	return (
		<div style={{ margin: '35px 0', display: 'flex', flexDirection: 'column', gap: '15px' }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<p style={{ margin: 0 }}>On sale</p>
				<MaterialUISwitch />
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<p style={{ margin: 0 }}>In stock</p>
				<MaterialUISwitch />
			</div>
		</div>
	);
}

export default SwitchSection;
