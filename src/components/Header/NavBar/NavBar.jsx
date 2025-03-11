import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeMenuBurger } from '../../../store/reducers/cartReducer';
import s from './Navbar.module.scss';
import Logo from '../Logo/Logo';
import HeaderIcon from '../HeaderIcon/HeaderIcon';

const NAV_ITEMS = [
	{ path: '/Book-shop', label: 'Home' },
	{ path: '/shop', label: 'Shop' },
	{ path: '/contacts', label: 'Contacts' },
	{ path: '/account', label: 'Account' },
];

export default function Navbar({ burgerMenu }) {
	const dispatch = useDispatch();
	const location = useLocation();
	const isMobile = useMediaQuery('(max-width:991px)');
	const [activeIndex, setActiveIndex] = useState(null);

	// Обновляем activeIndex при смене маршрута
	useEffect(() => {
		const index = NAV_ITEMS.findIndex(item => item.path === location.pathname);
		setActiveIndex(index !== -1 ? index : null);
	}, [location.pathname]);

	const handleClick = index => {
		setActiveIndex(index);
		dispatch(closeMenuBurger());
	};

	return (
		<nav className={s.nav}>
			<ul className={clsx(s.navList, { [s.navListBurger]: burgerMenu })}>
				{isMobile && <Logo fontSize='20px' />}
				{NAV_ITEMS.map((item, index) => (
					<li
						key={item.path}
						className={clsx(s.navItem, {
							[s.navItemActive]: activeIndex === index,
							[s.navItemBurger]: burgerMenu,
						})}
					>
						<Link
							onClick={() => handleClick(index)}
							to={item.path}
							className={clsx(s.navLink, {
								[s.navLinkActive]: activeIndex === index,
								[s.navLinkBurger]: burgerMenu,
							})}
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
			{!isMobile && <HeaderIcon burgerMenu={burgerMenu} />}
		</nav>
	);
}
