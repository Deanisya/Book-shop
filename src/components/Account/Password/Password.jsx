import React from 'react';
import s from './Password.module.scss';
import Title from '../../common/Title/Title';
import Input from '../../common/Input/Input';
import ButtonForm from '../../common/ButtonForm/ButtonForm';

const Password = () => {
	return (
		<div className={s.password}>
			<div className={s.passwordWrapper}>
				<Title title='Have you Forgotten Your Password ?' />
				<h3 className={s.subTitle}>
					If you've forgotten your password, enter your e-mail address and we'll send you an e-mail
				</h3>
				<Input type='email' placeholder='Email' />
				<ButtonForm title='RESET PASSWORD' />
			</div>
		</div>
	);
};

export default Password;
