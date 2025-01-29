import React from 'react';
import styles from './SectionContainer.module.scss';

function SectionContainer(props) {
	return <section className={styles.sectionContainer}>{props.children}</section>;
}

export default SectionContainer;
