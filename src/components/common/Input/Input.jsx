import React from 'react';
import s from './Input.module.scss';
import clsx from 'clsx';

const Input = ({ placeholder, type, required, display, pattern }) => {
	return <input className={clsx(s.input, { [s.inputCheckbox]: type === 'checkbox' })} type={type} pattern={pattern} placeholder={placeholder} required={required} style={{ display: `${display}` }} />;
};

export default Input;
