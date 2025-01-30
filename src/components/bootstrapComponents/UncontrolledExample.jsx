import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../bootstrapComponents/ExampleCarouselImage';
import './UncontrolledExample.css';

function UncontrolledExample() {
	const [paused, setPaused] = useState(false);

	const handleMouseEnter = () => {
		setPaused(true);
	};

	const handleMouseLeave = () => {
		setPaused(false);
	};

	return (
		<Carousel
			controls={false}
			indicators={true}
			interval={null} // Отключаем автоматическую прокрутку
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			pause={paused ? 'hover' : false} // Остановка карусели при наведении
		>
			<Carousel.Item>
				<ExampleCarouselImage text='First slide' />
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<ExampleCarouselImage text='Second slide' />
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<ExampleCarouselImage text='Third slide' />
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default UncontrolledExample;
