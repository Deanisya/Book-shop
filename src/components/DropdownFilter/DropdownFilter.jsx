import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../store/reducers/booksListReducer';

export default function SelectLabels() {
	// const [sort, setSort] = React.useState('');
	// const [category, setCategoryState] = React.useState('');
	const category = useSelector(state => state.booksList.category);
	const categories = ['Art', 'History', 'Fiction', 'Non-fiction', 'Travel', 'Romance', 'Horror', 'Psychology', 'Philosophy', 'Business', 'Cooking', 'Poetry'];

	const dispatch = useDispatch();
	const handleChange = event => {
		const selectedCategory = event.target.value;
		dispatch(setCategory(selectedCategory));
	};

	return (
		<div style={{ margin: '35px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
			<FormControl sx={{ m: 0, minWidth: '100%', border: '1px solid #565656', borderRadius: '4px' }}>
				<Select
					value={category}
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
					<MenuItem value=''>Categories</MenuItem>
					{categories.map((cat, index) => (
						<MenuItem key={index} value={cat}>
							{cat}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
