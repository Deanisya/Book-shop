import React from 'react';
import s from './Login.module.scss';
import ButtonForm from '../../common/ButtonForm/ButtonForm';
import Input from '../../common/Input/Input';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<form className={s.accountForm}>
			<Input type='email' placeholder='Email' />
			<Input type='password' placeholder='Password' />
			<div className={s.accountFormCheckbox}>
				<Input type='checkbox' />
				<span>Remember me</span>
			</div>
			<Link to='/dashboard'>
				<ButtonForm title='SIGN IN' />
			</Link>
			<Link className={s.accountFormForgottenPasswordLink} to='/password'>
				Have you forgotten your password?
			</Link>
		</form>
	);
};

export default Login;
