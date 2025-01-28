import React from 'react';
import { useSelector } from 'react-redux';
import styles from './NavBar.module.scss';

function NavBar() {
	const links = useSelector(state => state.staticData.links);
	console.log(links);

	return (
		<ul className={styles.listMenu}>
			{links.map(link => (
				<li className={styles.linkList} key={link.id}>
					<a className={styles.linkTitle} href='#'>
						{link.title}
					</a>
				</li>
			))}
		</ul>
	);
}

export default NavBar;
