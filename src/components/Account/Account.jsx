import React, { useState } from 'react';
import s from './Account.module.scss';
import Title from '../common/Title/Title';
import Input from '../common/Input/Input';
import ButtonForm from '../common/ButtonForm/ButtonForm';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const Account = () => {
	const [regiester, setRegiester] = useState(false);
	return (
		<div className={s.account}>
			<div className={s.accountWrapper}>
				<Title title='My account' />
				<div className={s.blockEnter}>
					<button
						onClick={() => setRegiester(false)}
						className={clsx(s.btnEnter, {
							[s.btnEnterNotActive]: regiester === true,
						})}>
						Sign In
					</button>
					<button
						onClick={() => setRegiester(true)}
						className={clsx(s.btnEnter, {
							[s.btnEnterNotActive]: regiester === false,
						})}>
						Register
					</button>
				</div>

				{regiester ? (
					<form className={s.accountFormTwo}>
						<Input type='text' placeholder='Your first name' />
						<Input type='text' placeholder='Your last name' />
						<Input type='email' placeholder='Email' />
						<Input type='password' placeholder='Password' />
						<ButtonForm title='Create Account' />
					</form>
				) : (
					<form className={s.accountForm}>
						<Input type='email' placeholder='Email' />
						<Input type='password' placeholder='Password' />
						<div className={s.accountFormCheckbox}>
							<Input type='checkbox' />
							<span>Remember me</span>
						</div>
						<ButtonForm title='SIGN IN' />
						<Link className={s.accountFormForgottenPasswordLink} to='/password'>
							Have you forgotten your password?
						</Link>
					</form>
				)}
			</div>
		</div>
	);
};

export default Account;
