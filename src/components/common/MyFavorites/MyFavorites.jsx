import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../../store/reducers/booksListReducer';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import clsx from 'clsx';
import s from './MyFavorites.module.scss';

function MyFavorites({ book, styleFavorite }) {
	const { favorites } = useSelector(state => state.booksList);
	const isFavorites = favorites.some(fav => fav.id === book.id);
	const dispatch = useDispatch();

	const toggleFavorites = () => {
		if (isFavorites) {
			dispatch(removeFromFavorites(book.id));
		} else {
			dispatch(addToFavorites(book));
		}
	};

	return (
		<button
			onClick={toggleFavorites}
			className={clsx(s.myFavorite, {
				[s.myFavoriteShop]: styleFavorite,
			})}
		>
			<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} checked={isFavorites} />
		</button>
	);
}

export default MyFavorites;
