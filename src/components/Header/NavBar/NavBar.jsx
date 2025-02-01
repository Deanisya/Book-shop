import React, { useState } from 'react';
import s from './Navbar.module.scss';
import clsx from 'clsx';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleClick = index => {
		setActiveIndex(index === activeIndex ? null : index); // Переключаем активность
	};

	return (
		<nav className={s.nav}>
			<ul className={s.navList}>
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
						})}
					>
						Shop
					</Link>
				</li>
				<li
					className={clsx(s.navItem, {
						[s.navItemActive]: activeIndex === 2,
					})}
				>
					<Link
						onClick={() => handleClick(2)}
						to='/blog'
						className={clsx(s.navLink, {
							[s.navLinkActive]: activeIndex === 2,
						})}
					>
						Blog
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
						})}
					>
						Contacts
					</Link>
				</li>
			</ul>
			<HeaderIcon />
		</nav>
	);
}
