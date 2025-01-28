import React from 'react';
import { useSelector } from 'react-redux';
import styles from './IconsPanel.module.scss';

function IconsPanel() {
	const icons = useSelector(state => state.staticData.icons);
	console.log(icons);

	return (
		<div className={styles.icons}>
			{icons.map(icon => (
				<a className={styles.linkIcons} key={icon.id} href='#'>
					{icon.svg}
				</a>
			))}
		</div>
	);
}

export default IconsPanel;
