import React, { useState } from 'react';
import s from './Account.module.scss';
import Title from '../common/Title/Title';
import Input from '../common/Input/Input';
import ButtonForm from '../common/ButtonForm/ButtonForm';
import clsx from 'clsx';
import Register from './Register/Register';
import { Link } from 'react-router-dom';
import Login from './Login/Login';

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
						})}
					>
						Sign In
					</button>
					<button
						onClick={() => setRegiester(true)}
						className={clsx(s.btnEnter, {
							[s.btnEnterNotActive]: regiester === false,
						})}
					>
						Register
					</button>
				</div>

				{regiester ? <Register /> : <Login />}
			</div>
		</div>
	);
};

export default Account;
