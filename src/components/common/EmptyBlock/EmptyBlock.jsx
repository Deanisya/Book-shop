import React from 'react';
import s from './EmptyBlock.module.scss';

function EmptyBlock({ title }) {
	return <div className={s.emptyBlock}>{title}</div>;
}

export default EmptyBlock;
