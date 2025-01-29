import React from 'react';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<p className={styles.titleLogo}>shoppe</p>
			<nav>
				<NavBar />
			</nav>
		</header>
	);
}

export default Header;
