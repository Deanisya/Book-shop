import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './RandomQuoteOfTheDay.module.scss';

function RandomQuoteOfTheDay() {
	const quotes = useSelector(state => state.staticData.quotes);
	const [quote, setQuote] = useState('«You can never be overdressed or overeducated.» - Oscar Wilde');

	const handleGetRandomQuotes = () => {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		setQuote(quotes[randomIndex]);
	};

	return (
		<div className={s.randomQuoteBlock}>
			<div className={s.titleBlock}>
				<h1 className={s.randomQuoteTitle}>Quote of the day</h1>
				<span className={s.line}></span>
			</div>

			<p className={s.randomQuote}>{quote}</p>
			<button onClick={handleGetRandomQuotes} className={s.randomQuoteBtn}>
				Generate quotes
			</button>
		</div>
	);
}

export default RandomQuoteOfTheDay;
