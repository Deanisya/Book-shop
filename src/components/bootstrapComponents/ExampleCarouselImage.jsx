// src/components/ExampleCarouselImage.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import book1 from '../../img/book1.png';

import './ExampleCarouselImage.css';

const ExampleCarouselImage = () => {
	return (
		<div className='carousel-image-container'>
			<div className='carousel-image-container-left'>
				<h3 className='carousel-image-title'>Life of the wild</h3>
				<p className='carousel-image-description'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.
				</p>
				<button className='carousel-image-button'>
					Read More{' '}
					<svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M8.00414 0L7.22162 0.780453L10.9102 4.45764H0V5.54236H10.9102L7.22216 9.22009L8.00414 10L12.6264 5.38996L13 5L12.6264 4.61004L8.00414 0Z' fill='#fff' />
					</svg>
				</button>
			</div>
			<div className='carousel-image-container-right'>
				<img src={book1} className='carousel-book-image' alt='Book' />
				<div className='carousel-image-pattern'></div>
			</div>
		</div>
	);
};

export default ExampleCarouselImage;
