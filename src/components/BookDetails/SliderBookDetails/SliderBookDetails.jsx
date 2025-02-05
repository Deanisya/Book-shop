import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import s from './SliderBookDetails.module.scss';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { useSelector } from 'react-redux';
import imageBook from '../../../img/book1.png';

const SliderBookDetails = () => {
	const { bookDetails, loading } = useSelector(state => state.booksList); // Получаем данные и состояние загрузки
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);

	// Если данные ещё загружаются, отображаем сообщение "Loading..."
	if (loading) {
		return <div>Loading...</div>;
	}

	// Если данных нет, показываем сообщение "Нет данных"
	if (!bookDetails?.volumeInfo) {
		return <div>No data available</div>;
	}

	// Получаем изображения из bookDetails, если они есть
	const images = bookDetails?.volumeInfo?.imageLinks?.thumbnail ? [bookDetails.volumeInfo.imageLinks.thumbnail] : [imageBook, imageBook]; // Запасное изображение, если данных нет // Если bookDetails или bookDetails.volumeInfo не существует, выражение bookDetails?.volumeInfo вернет undefined и не вызовет ошибку. Это важно, чтобы избежать ошибок при обращении к свойствам, которых может не быть в объекте.

	return (
		<div className={s.sliderContainer}>
			{/* Слайдер миниатюр (слева) */}
			<div className={s.smallImages}>
				<Swiper direction='vertical' slidesPerView={4} spaceBetween={10} watchSlidesProgress onSwiper={setThumbsSwiper} modules={[FreeMode, Thumbs]} speed={300} className={s.swiperSmallImages}>
					{images.map((src, index) => (
						<SwiperSlide key={index}>
							<img src={src} alt={`Thumbnail ${index}`} className={s.smallImage} loading='lazy' />
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Основной слайдер (справа) */}
			<div className={s.largeImageContainer}>
				<Swiper
					style={{ width: '100%' }}
					speed={300}
					spaceBetween={10}
					thumbs={{ swiper: thumbsSwiper || undefined }}
					onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
					modules={[FreeMode, Thumbs]}
				>
					{images.map((src, index) => (
						<SwiperSlide key={index}>
							<img src={src} alt={`Main ${index}`} className={`${s.largeImage} ${activeIndex === index ? s.fadeIn : ''}`} loading='lazy' />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default SliderBookDetails;
