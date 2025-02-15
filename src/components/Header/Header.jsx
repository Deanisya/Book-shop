import React from 'react';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import s from './Header.module.scss';

export default function Header() {
	return (
		<header className={s.header}>
			<Logo />
			<Navbar />
		</header>
	);
}
