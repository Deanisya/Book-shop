import React from 'react';
import s from './Register.module.scss';
import Input from '../../common/Input/Input';
import ButtonForm from '../../common/ButtonForm/ButtonForm';

const Register = () => {
	return (
		<form className={s.accountFormTwo}>
			<Input type='text' placeholder='Your first name' />
			<Input type='text' placeholder='Your last name' />
			<Input type='email' placeholder='Email' />
			<Input type='password' placeholder='Password' />
			<ButtonForm title='Create Account' />
		</form>
	);
};

export default Register;
