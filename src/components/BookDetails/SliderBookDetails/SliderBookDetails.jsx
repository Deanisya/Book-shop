import React from 'react';
import s from './SliderBookDetails.module.scss';
import { useSelector } from 'react-redux';
import imageBook from '../../../img/book1.png';

const SliderBookDetails = () => {
	const { bookDetails, loading } = useSelector(state => state.booksList);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!bookDetails?.volumeInfo) {
		return <div>No data available</div>;
	}

	const images = bookDetails?.volumeInfo?.imageLinks?.thumbnail ? [bookDetails.volumeInfo.imageLinks.thumbnail] : [imageBook, imageBook];

	return (
		<div className={s.imageContainer}>
			{images.map((src, index) => (
				<img key={index} src={src} alt={`Main ${index}`} className={s.image} loading='lazy' />
			))}
		</div>
	);
};

export default SliderBookDetails;
