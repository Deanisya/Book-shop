import React, { useState } from 'react';
import s from './Navbar.module.scss';
import Logo from '../Logo/Logo';
import clsx from 'clsx';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenuBurger, openSidebar } from '../../../store/reducers/cartReducer';

export default function Navbar({ burgerMenu }) {
	const dispatch = useDispatch();
	const [activeIndex, setActiveIndex] = useState(null);
	const isMobile = useMediaQuery('(max-width:991px)');

	const handleClick = index => {
		setActiveIndex(index === activeIndex ? null : index); // Переключаем активность
		dispatch(closeMenuBurger());
	};

	return (
		<>
			{isMobile ? (
				<nav className={s.nav}>
					<ul
						className={clsx(s.navList, {
							[s.navListBurger]: burgerMenu,
						})}
					>
						<Logo fontSize='20px' />
						<li
							className={clsx(s.navItem, {
								[s.navItemBurger]: burgerMenu,
							})}
						>
							<Link
								onClick={() => handleClick(0)}
								to='/'
								className={clsx(s.navLink, {
									[s.navLinkActive]: activeIndex === 0,
									[s.navLinkBurger]: burgerMenu,
								})}
							>
								Home
							</Link>
						</li>
						<li
							className={clsx(s.navItem, {
								[s.navItemBurger]: burgerMenu,
							})}
						>
							<Link
								onClick={() => handleClick(1)}
								to='/shop'
								className={clsx(s.navLink, {
									[s.navLinkActive]: activeIndex === 1,
									[s.navLinkBurger]: burgerMenu,
								})}
							>
								Shop
							</Link>
						</li>
						<li
							className={clsx(s.navItem, {
								[s.navItemBurger]: burgerMenu,
							})}
						>
							<Link
								onClick={() => handleClick(4)}
								to='/wishlist'
								className={clsx(s.navLink, {
									[s.navLinkActive]: activeIndex === 4,
									[s.navLinkBurger]: burgerMenu,
								})}
							>
								Wishlist
							</Link>
						</li>
						<li
							className={clsx(s.navItem, {
								[s.navItemBurger]: burgerMenu,
							})}
						>
							<Link
								onClick={() => handleClick(2)}
								to='/contacts'
								className={clsx(s.navLink, {
									[s.navLinkActive]: activeIndex === 2,
									[s.navLinkBurger]: burgerMenu,
								})}
							>
								Contacts
							</Link>
						</li>

						<li
							className={clsx(s.navItem, {
								[s.navItemBurger]: burgerMenu,
							})}
						>
							<Link
								onClick={() => handleClick(5)}
								to='/account'
								className={clsx(s.navLink, {
									[s.navLinkActive]: activeIndex === 5,
									[s.navLinkBurger]: burgerMenu,
								})}
							>
								Account
							</Link>
						</li>
					</ul>
				</nav>
			) : (
				<nav className={s.nav}>
					<ul
						className={clsx(s.navList, {
							[s.navListBurger]: burgerMenu,
						})}
					>
						<li
							className={clsx(s.navItem, {
								[s.navItemActive]: activeIndex === 0,
							})}
						>
							<Link
								onClick={() => handleClick(0)}
								to='/'
								className={clsx(s.navLink, {
									[s.navLinkActive]: activeIndex === 0,
									[s.navLinkBurger]: burgerMenu,
								})}
							>
								Home
							</Link>
						</li>
						<li
							className={clsx(s.navItem, {
								[s.navItemActive]: activeIndex === 1,
							})}
						>
							<Link
								onClick={() => handleClick(1)}
								to='/shop'
								className={clsx(s.navLink, {
									[s.navLinkActive]: activeIndex === 1,
									[s.navLinkBurger]: burgerMenu,
								})}
							>
								Shop
							</Link>
						</li>
						<li
							className={clsx(s.navItem, {
								[s.navItemActive]: activeIndex === 3,
							})}
						>
							<Link
								onClick={() => handleClick(3)}
								to='/contacts'
								className={clsx(s.navLink, {
									[s.navLinkActive]: activeIndex === 3,
									[s.navLinkBurger]: burgerMenu,
								})}
							>
								Contacts
							</Link>
						</li>
					</ul>
					<HeaderIcon burgerMenu={burgerMenu} />
				</nav>
			)}
		</>
	);
}
