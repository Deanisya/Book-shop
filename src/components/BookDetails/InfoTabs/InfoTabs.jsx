import React, { useState } from 'react';
import s from './InfoTabs.module.scss';
import ContentTabs from './ContentTabs/ContentTabs';
import clsx from 'clsx';

const tabs = [
	{ id: 'tab1', label: 'Description' },
	{ id: 'tab2', label: 'Additional information' },
	{ id: 'tab3', label: 'Reviews (0)' },
];

const InfoTabs = () => {
	const [activeTab, setActiveTab] = useState('tab1');

	const handleTabClick = (e, tabId) => {
		e.preventDefault();
		setActiveTab(tabId);
	};

	return (
		<div className={s.infoTabs}>
			<ul className={s.infoList}>
				{tabs.map(tab => (
					<li
						key={tab.id}
						className={clsx(s.infoListItem, {
							[s.infoListItemActive]: activeTab === tab.id,
						})}
					>
						<a
							onClick={e => handleTabClick(e, tab.id)}
							className={clsx(s.infoListItemLink, {
								[s.infoListItemLinkActive]: activeTab === tab.id,
							})}
							href='#'
						>
							{tab.label}
						</a>
					</li>
				))}
			</ul>
			<ContentTabs activeTab={activeTab} />
		</div>
	);
};

export default InfoTabs;
