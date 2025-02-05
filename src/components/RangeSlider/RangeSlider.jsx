import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
	return `${value}`;
}

export default function RangeSlider() {
	const [value, setValue] = React.useState([10, 37]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			<Box sx={{ width: '100%' }}>
				<Slider
					getAriaLabel={() => 'Temperature range'}
					value={value}
					onChange={handleChange}
					valueLabelDisplay='off'
					getAriaValueText={valuetext}
					sx={{
						color: '#565656',
						height: 4,
						borderRadius: 0,
						'& .MuiSlider-track': {
							bgcolor: 'black',
							border: 'none',
						},

						'& .MuiSlider-thumb': {
							height: 15,
							width: 15,
							backgroundColor: '#000000',
							border: 'none',
							'&:focus, &:hover, &.Mui-active': {
								boxShadow: 'none',
							},
							'&:focus-visible': {
								outline: 'none',
							},
						},
						'&:focus': {
							outline: 'none',
						},
						'& .MuiSlider-valueLabel': {
							backgroundColor: 'black',
							boxShadow: 'none',
						},
					}}
				/>
			</Box>
			<div style={{ display: 'flex', justifyContent: 'space-between', color: '#565656' }}>
				<span>
					Price: ${value[0]} - ${value[1]}
				</span>
				<span>Filter</span>
			</div>
		</div>
	);
}
