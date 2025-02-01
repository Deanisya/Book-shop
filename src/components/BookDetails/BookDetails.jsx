import React from 'react';
import s from './BookDetails.module.scss';
import SliderBookDetails from './SliderBookDetails/SliderBookDetails';
import OneBookDetails from './OneBookDetails/OneBookDetails';
import InfoTabs from './InfoTabs/InfoTabs';

export default function BookDetails() {
	return (
		<>
			<div className={s.bookDetailsContainer}>
				<SliderBookDetails />
				<OneBookDetails />
			</div>
			<InfoTabs />
		</>
	);
}
