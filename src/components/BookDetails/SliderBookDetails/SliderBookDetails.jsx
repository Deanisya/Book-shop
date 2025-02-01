import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import s from './SliderBookDetails.module.scss';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const images = [
	'https://avatars.mds.yandex.net/i?id=a239aa36dbd60686354828b561aefe3fca29fbd6-11951022-images-thumbs&n=13',
	'https://cdn.culture.ru/images/9d40020b-87fd-5c33-bcc4-949b5ae88729',
	'https://avatars.mds.yandex.net/i?id=64c877d166bc0c9ffd3bd1175a7ea02fcfb70996-6431583-images-thumbs&n=13',
	'https://avatars.mds.yandex.net/i?id=bed1bf0910c8cb3132c66beb972f5def_l-7751770-images-thumbs&n=13',
];

const SliderBookDetails = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<div className={s.sliderContainer}>
			<div className={s.smallImages}>
				<Swiper
					direction='vertical'
					slidesPerView={4}
					spaceBetween={10}
					watchSlidesProgress
					onSwiper={setThumbsSwiper}
					modules={[FreeMode, Thumbs]}
					speed={0}
					className={s.swiperSmallImages}>
					{images.map((src, index) => (
						<SwiperSlide key={index}>
							<img src={src} alt={`Thumbnail ${index}`} className={s.smallImage} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Правый слайдер (основное изображение) */}
			<div className={s.largeImageContainer}>
				<Swiper
					style={{ width: '100%' }}
					speed={0}
					spaceBetween={10}
					thumbs={{ swiper: thumbsSwiper || undefined }}
					onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
					modules={[FreeMode, Thumbs]}>
					{images.map((src, index) => (
						<SwiperSlide key={index}>
							<img
								src={src}
								alt={`Main ${index}`}
								className={`${s.largeImage} ${activeIndex === index ? s.fadeIn : ''}`}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default SliderBookDetails;
