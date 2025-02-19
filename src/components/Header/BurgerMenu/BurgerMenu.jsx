import React, { useEffect, useState } from 'react';
import styles from './BurgerMenu.module.scss';
import Blur from '../../Cart/Blur/Blur';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';

const BurgerMenu = () => {
	const { isOpenMenuBurger } = useSelector((state) => state.cart);

	useEffect(() => {
		if (isOpenMenuBurger) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isOpenMenuBurger]);
	return (
		<>
			{isOpenMenuBurger && <Blur />}
			<div className={`${styles.burgerMenu} ${isOpenMenuBurger ? styles.open : ''}`}>
				<Navbar burgerMenu={'burgerMenu'} />
			</div>
		</>
	);
};

export default BurgerMenu;
