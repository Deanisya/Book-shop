import React, { useState } from 'react';
import s from './InfoTabs.module.scss';
import ContentTabs from './ContentTabs/ContentTabs';
import clsx from 'clsx';

const InfoTabs = () => {
	const [activeTab, setActiveTab] = useState('tab1');
	const handleClickTab1 = (e) => {
		e.preventDefault();
		setActiveTab('tab1');
	};
	const handleClickTab2 = (e) => {
		e.preventDefault();
		setActiveTab('tab2');
	};
	const handleClickTab3 = (e) => {
		e.preventDefault();
		setActiveTab('tab3');
	};
	return (
		<div className={s.infoTabs}>
			<ul className={s.infoList}>
				<li
					className={clsx(s.infoListItem, {
						[s.infoListItemActive]: activeTab === 'tab1',
					})}>
					<a
						onClick={handleClickTab1}
						className={clsx(s.infoListItemLink, {
							[s.infoListItemLinkActive]: activeTab === 'tab1',
						})}
						href='#'>
						Description
					</a>
				</li>
				<li
					className={clsx(s.infoListItem, {
						[s.infoListItemActive]: activeTab === 'tab2',
					})}>
					<a
						onClick={handleClickTab2}
						className={clsx(s.infoListItemLink, {
							[s.infoListItemLinkActive]: activeTab === 'tab2',
						})}
						href='#'>
						Aditional information
					</a>
				</li>
				<li
					className={clsx(s.infoListItem, {
						[s.infoListItemActive]: activeTab === 'tab3',
					})}>
					<a
						onClick={handleClickTab3}
						className={clsx(s.infoListItemLink, {
							[s.infoListItemLinkActive]: activeTab === 'tab3',
						})}
						href='#'>
						Reviews (0)
					</a>
				</li>
			</ul>
			<ContentTabs activeTab={activeTab} />
		</div>
	);
};

export default InfoTabs;
