import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../bootstrapComponents/ExampleCarouselImage';
import './UncontrolledExample.css';
import book1 from '../../img/античность2.jpg';
import book2 from '../../img/античность1.jpg';
import book3 from '../../img/античность3.jpg';

function UncontrolledExample() {
	const [paused, setPaused] = useState(false);

	const handleMouseEnter = () => {
		setPaused(true);
	};

	const handleMouseLeave = () => {
		setPaused(false);
	};

	// Данные для слайдов
	const slider = {
		id: ['oCy7DwAAQBAJ', 'oNYKEAAAQBAJ', 'Z2bDBAAAQBAJ'],
		image: [book1, book2, book3],
		title: ['Libraries before Alexandria', 'Making and Breaking the Gods', 'The Oxford Handbook of Roman Epigraphy'],
		description: [
			'The creation of the Library of Alexandria is widely regarded as one of the great achievements in the history of humankind - a giant endeavour to amass all known literature and scholarly texts in one central location, so as to preserve it and make it available for the public....',
			'Drawing on both textual and archaeological sources, this book discusses how Christians in Late Antiquity negotiated the sculptural environment of cities and sanctuaries in a variety of ways, ranging from creative transformations to iconoclastic performances. Their responses to pagan sculpture presen...',
			'Description for From North Pole to Equator...',
			'Epigraphy, or the study of inscriptions, is critical for anyone seeking to understand the Roman world, whether they regard themselves as literary scholars, historians, archaeologists, anthropologists, religious scholars or work in a field that touches on the Roman world from c. 500 BCE to 500 CE and...',
		],
	};

	return (
		<Carousel controls={false} indicators={true} interval={3000} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} pause={paused ? 'hover' : false}>
			{slider.id.map((id, index) => (
				<Carousel.Item key={id}>
					<ExampleCarouselImage id={id} title={slider.title[index]} image={slider.image[index]} description={slider.description[index]} />
					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
}

export default UncontrolledExample;
