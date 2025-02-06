import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputBase } from '@mui/material';

export default function SelectLabels() {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<div>
			<FormControl sx={{ m: 0, minWidth: '100%', borderBottom: '1px solid #d8d8d8' }}>
				<Select
					sx={{ color: '#707070' }}
					value={age}
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
					}>
					<MenuItem value=''>Country</MenuItem>
					<MenuItem value={10}>Russia</MenuItem>
					<MenuItem value={20}>China</MenuItem>
					<MenuItem value={30}>Australia</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}
