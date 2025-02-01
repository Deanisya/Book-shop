import React from 'react';
import styles from './Logo.module.scss';

export default function Logo() {
	return (
		<a href='/' className={styles.linkLogo}>
			<p className={styles.logo}>
				{' '}
				<span className={styles.first}>shoppe</span> <span className={styles.second}>book</span>
			</p>
		</a>
	);
}
