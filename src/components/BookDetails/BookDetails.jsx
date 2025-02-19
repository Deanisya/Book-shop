import React from 'react';
import s from './BookDetails.module.scss';
import SliderBookDetails from './SliderBookDetails/SliderBookDetails';
import OneBookDetails from './OneBookDetails/OneBookDetails';
import InfoTabs from './InfoTabs/InfoTabs';
import { useSelector } from 'react-redux';
import imageBook from '../../img/book1.png';

export default function BookDetails() {
	// const { bookDetails, loading } = useSelector(state => state.booksList);

	// Если данные ещё загружаются, отображаем сообщение "Loading..."
	// if (loading || !bookDetails) {
	// 	return <div>Loading...</div>;
	// }

	// Получаем изображения из bookDetails, если они есть
	// const images = bookDetails?.volumeInfo?.imageLinks?.thumbnail ? [bookDetails?.volumeInfo?.imageLinks?.thumbnail] : [imageBook];
	return (
		<>
			<div className={s.bookDetailsContainer}>
				<SliderBookDetails />
				{/* <div className={s.imageContainer}>
					{images.map((src, index) => (
						<img src={src} alt={`Main ${index}`} className={s.image} loading='lazy' />
					))}
				</div> */}
				<OneBookDetails />
			</div>
			<InfoTabs />
		</>
	);
}
