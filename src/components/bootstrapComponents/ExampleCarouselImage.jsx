// src/components/ExampleCarouselImage.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from '../../img/mainPhoto.png';

const ExampleCarouselImage = () => {
	return (
		<div>
			<img style={{ width: '100%' }} src={photo} alt='photo' />
		</div>
	);
};

export default ExampleCarouselImage;
