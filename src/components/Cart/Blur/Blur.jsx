import React from 'react';
import styles from './Blur.module.scss';
import { useDispatch } from 'react-redux';
import { closeMenuBurger, closeSidebar } from '../../../store/reducers/cartReducer';

function Blur() {
	const dispatch = useDispatch();

	const handleCloseSideBar = () => {
		dispatch(closeSidebar());
		dispatch(closeMenuBurger());
	};

	return <div onClick={handleCloseSideBar} className={styles.blurMenu}></div>;
}

export default Blur;
