import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { setInStock, setPriceRange } from '../../store/reducers/booksListReducer';

export default function RangeSlider() {
	const dispatch = useDispatch();
	const { minPrice, maxPrice, inStock } = useSelector(state => state.booksList);
	const [range, setRange] = useState([minPrice, maxPrice]);

	// Синхронизируем локальное состояние с Redux при изменении глобальных значений
	useEffect(() => {
		setRange([minPrice, maxPrice]);
	}, [minPrice, maxPrice]);

	// Обновляем локальное состояние при движении слайдера
	const handleChange = (event, newValue) => {
		setRange(newValue);
	};

	// Отправляем данные в Redux только при отпускании слайдера
	const handleChangeCommitted = (event, newValue) => {
		dispatch(setPriceRange({ min: newValue[0], max: newValue[1] }));
		dispatch(setInStock(false));
	};

	return (
		<div>
			<Box sx={{ width: '100%' }}>
				<Slider
					getAriaLabel={() => 'Price range'}
					value={range}
					onChange={handleChange}
					onChangeCommitted={handleChangeCommitted} // ✅ Отправляем в Redux только при отпускании
					valueLabelDisplay='off'
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
						'& .MuiSlider-valueLabel': {
							backgroundColor: 'black',
							boxShadow: 'none',
						},
					}}
					min={0}
					max={15000}
					step={100}
				/>
			</Box>
			<div style={{ display: 'flex', justifyContent: 'space-between', color: '#565656' }}>
				<span>
					Price: ${range[0]} - ${range[1]}
				</span>
				<span>Filter</span>
			</div>
		</div>
	);
}
