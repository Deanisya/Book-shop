import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

export default function SelectLabels() {
	const [sort, setSort] = React.useState('');

	const handleChange = event => {
		setSort(event.target.value);
	};

	return (
		<div style={{ margin: '35px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
			<FormControl sx={{ m: 0, minWidth: '100%', border: '1px solid #565656', borderRadius: '4px' }}>
				<Select
					value={sort}
					onChange={handleChange}
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
					input={
						<InputBase
							sx={{
								'&:focus': {
									outline: 'none', // Убираем контур при фокусе
									boxShadow: 'none', // Убираем тень при фокусе
								},
								// Дополнительные стили для InputBase
								'& .MuiInputBase-input': {
									padding: '10px',
								},
							}}
						/>
					}
				>
					<MenuItem value=''>Sort By</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
			<FormControl sx={{ m: 0, minWidth: '100%', border: '1px solid #565656', borderRadius: '4px' }}>
				<Select
					value={sort}
					onChange={handleChange}
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
					input={
						<InputBase
							sx={{
								'&:focus': {
									outline: 'none', // Убираем контур при фокусе
									boxShadow: 'none', // Убираем тень при фокусе
								},
								// Дополнительные стили для InputBase
								'& .MuiInputBase-input': {
									padding: '10px',
								},
							}}
						/>
					}
				>
					<MenuItem value=''>Sort By</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}
