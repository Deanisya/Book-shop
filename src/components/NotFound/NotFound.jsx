import React from 'react';
import s from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className={s.notFound}>
			<h1 className={s.titleError}>404 ERROR</h1>
			<h3 className={s.subTitleError}>
				This page not found; <br /> back to home and start again
			</h3>
			<Link to='/' className={s.btnReturnHomePage}>
				HOMEPAGE
			</Link>
		</div>
	);
};

export default NotFound;
