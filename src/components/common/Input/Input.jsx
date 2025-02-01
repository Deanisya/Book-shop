import React from 'react';
import s from './Input.module.scss';
import clsx from 'clsx';

const Input = ({ placeholder, type }) => {
	return (
		<input
			className={clsx(s.input, { [s.inputCheckbox]: type === 'checkbox' })}
			type={type}
			placeholder={placeholder}
		/>
	);
};

export default Input;
