import React from 'react';
import { useSelector } from 'react-redux';
import styles from './NavBar.module.scss';
import IconsPanel from '../../IconsPanel/IconsPanel';

function NavBar() {
	const links = useSelector(state => state.staticData.links);
	console.log(links);

	return (
		<div className={styles.blockNavigation}>
			<ul className={styles.listMenu}>
				{links.map(link => (
					<li className={styles.linkList} key={link.id}>
						<a className={styles.linkTitle} href='#'>
							{link.title}
						</a>
					</li>
				))}
			</ul>
			<IconsPanel />
		</div>
	);
}

export default NavBar;
