import React from 'react';
import s from './ButtonForm.module.scss';

const ButtonForm = ({ title }) => {
	return <button className={s.formBtn}>{title}</button>;
};

export default ButtonForm;
