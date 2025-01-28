import React from 'react';
import logo from '../../img/logo.png';
import NavBar from './NavBar/NavBar';
import IconsPanel from '../IconsPanel/IconsPanel';
import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<img className={styles.img} src={logo} alt='logo' />
			<nav>
				<NavBar />
			</nav>
			<IconsPanel />
		</header>
	);
}

export default Header;
