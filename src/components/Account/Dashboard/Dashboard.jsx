import React, { useState } from 'react';
import styles from './Dashboard.module.scss';
import Title from '../../common/Title/Title';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import BasicTable from '../../common/BasicTable/BasicTable';
import Input from '../../common/Input/Input';
import ButtonForm from '../../common/ButtonForm/ButtonForm';
import SelectLabels from '../../common/Select/SelectLabels';
import { IconButton, useMediaQuery } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DownloadIcon from '@mui/icons-material/Download';
import PlaceIcon from '@mui/icons-material/Place';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Dashboard = () => {
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
	const handleClickTab4 = (e) => {
		e.preventDefault();
		setActiveTab('tab4');
	};
	const handleClickTab5 = (e) => {
		e.preventDefault();
		setActiveTab('tab5');
	};
	const handleClickTab6 = (e) => {
		e.preventDefault();
		setActiveTab('tab6');
	};

	const [visible, setVisible] = useState(false);
	const [view, setView] = useState(false);
	const [view2, setView2] = useState(false);

	const isMobile = useMediaQuery('(max-width:768px)');

	return (
		<div className={styles.dashboard}>
			{isMobile ? (
				<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
					<IconButton onClick={handleClickTab1}>
						<DashboardIcon />
					</IconButton>
					<IconButton onClick={handleClickTab2}>
						<ShoppingBagIcon />
					</IconButton>
					<IconButton onClick={handleClickTab3}>
						<DownloadIcon />
					</IconButton>
					<IconButton onClick={handleClickTab4}>
						<PlaceIcon />
					</IconButton>
					<IconButton onClick={handleClickTab5}>
						<ManageAccountsIcon />
					</IconButton>
				</div>
			) : (
				<div className={styles.dashboardTabs}>
					<Title title='My account' />
					<ul className={styles.dashboardTabsList}>
						<li
							className={clsx(styles.dashboardTabsListItem, {
								[styles.dashboardTabsListItemActive]: activeTab === 'tab1',
							})}>
							<a
								onClick={handleClickTab1}
								className={clsx(styles.dashboardTabsListLink, {
									[styles.dashboardTabsListLinkActive]: activeTab === 'tab1',
								})}
								href='#'>
								Dashboard
							</a>
						</li>
						<li
							className={clsx(styles.dashboardTabsListItem, {
								[styles.dashboardTabsListItemActive]: activeTab === 'tab2',
							})}>
							<a
								onClick={handleClickTab2}
								className={clsx(styles.dashboardTabsListLink, {
									[styles.dashboardTabsListLinkActive]: activeTab === 'tab2',
								})}
								href='#'>
								Orders
							</a>
						</li>
						<li
							className={clsx(styles.dashboardTabsListItem, {
								[styles.dashboardTabsListItemActive]: activeTab === 'tab3',
							})}>
							<a
								onClick={handleClickTab3}
								className={clsx(styles.dashboardTabsListLink, {
									[styles.dashboardTabsListLinkActive]: activeTab === 'tab3',
								})}
								href='#'>
								Downloads
							</a>
						</li>
						<li
							className={clsx(styles.dashboardTabsListItem, {
								[styles.dashboardTabsListItemActive]: activeTab === 'tab4',
							})}>
							<a
								onClick={handleClickTab4}
								className={clsx(styles.dashboardTabsListLink, {
									[styles.dashboardTabsListLinkActive]: activeTab === 'tab4',
								})}
								href='#'>
								Addresses
							</a>
						</li>
						<li
							className={clsx(styles.dashboardTabsListItem, {
								[styles.dashboardTabsListItemActive]: activeTab === 'tab5',
							})}>
							<a
								onClick={handleClickTab5}
								className={clsx(styles.dashboardTabsListLink, {
									[styles.dashboardTabsListLinkActive]: activeTab === 'tab5',
								})}
								href='#'>
								Account details
							</a>
						</li>
						<li
							className={clsx(styles.dashboardTabsListItem, {
								[styles.dashboardTabsListItemActive]: activeTab === 'tab6',
							})}>
							<a
								onClick={handleClickTab6}
								className={clsx(styles.dashboardTabsListLink, {
									[styles.dashboardTabsListLinkActive]: activeTab === 'tab6',
								})}
								href='#'>
								Logout
							</a>
						</li>
					</ul>
				</div>
			)}
			<div className={styles.dashboardTabsContent}>
				{activeTab === 'tab1' && (
					<div>
						<p>Hello Vitatheme (not Vitatheme? Log out)</p>
						<p>
							From your account dashboard you can view your recent orders, manage your shipping and
							billing addresses, and edit your password and account details.
						</p>
					</div>
				)}
				{activeTab === 'tab2' && (
					<div className={styles.orders}>
						{' '}
						{visible ? (
							<div className={styles.orderAlert}>
								<div className={styles.orderAlertInfo}>
									<p>No order has been made yet.</p>
								</div>
								<div className={styles.orderAlertBlockLink}>
									<Link className={styles.orderAlertLink} to='/'>
										BROWSE PRODUCT
									</Link>
								</div>
							</div>
						) : (
							<div className={styles.orderTable}>
								{isMobile ? (
									<div className={styles.orderMobileContainer}>
										<div className={styles.orderMobile}>
											<ul className={styles.orderMobileList}>
												<li className={styles.orderMobileTitle}>ORDER NUMBER</li>
												<li className={styles.orderMobileTitle}>DATE</li>
												<li className={styles.orderMobileTitle}> STATUS</li>
												<li className={styles.orderMobileTitle}>TOTAL</li>
												<li className={styles.orderMobileTitle}> ACTIONS</li>
											</ul>
											<ul className={styles.orderMobileList}>
												<li className={styles.orderMobileSubTitle}>7643980998990</li>
												<li className={styles.orderMobileSubTitle}>October 8,2021</li>
												<li className={styles.orderMobileSubTitle}>Delivered</li>
												<li className={styles.orderMobileSubTitle}>$ 105</li>
												<li className={styles.orderMobileSubTitle}>
													<Link className={styles.viewOrder} to='/order'>
														View Order
													</Link>
												</li>
											</ul>
										</div>
										<div className={styles.orderMobile}>
											<ul className={styles.orderMobileList}>
												<li className={styles.orderMobileTitle}>ORDER NUMBER</li>
												<li className={styles.orderMobileTitle}>DATE</li>
												<li className={styles.orderMobileTitle}> STATUS</li>
												<li className={styles.orderMobileTitle}>TOTAL</li>
												<li className={styles.orderMobileTitle}> ACTIONS</li>
											</ul>
											<ul className={styles.orderMobileList}>
												<li className={styles.orderMobileSubTitle}>7643980998990</li>
												<li className={styles.orderMobileSubTitle}>October 8,2021</li>
												<li className={styles.orderMobileSubTitle}>Delivered</li>
												<li className={styles.orderMobileSubTitle}>$ 105</li>
												<li className={styles.orderMobileSubTitle}>
													{' '}
													<Link className={styles.viewOrder} to='/order'>
														View Order
													</Link>
												</li>
											</ul>
										</div>
										<div className={styles.orderMobile}>
											<ul className={styles.orderMobileList}>
												<li className={styles.orderMobileTitle}>ORDER NUMBER</li>
												<li className={styles.orderMobileTitle}>DATE</li>
												<li className={styles.orderMobileTitle}> STATUS</li>
												<li className={styles.orderMobileTitle}>TOTAL</li>
												<li className={styles.orderMobileTitle}> ACTIONS</li>
											</ul>
											<ul className={styles.orderMobileList}>
												<li className={styles.orderMobileSubTitle}>7643980998990</li>
												<li className={styles.orderMobileSubTitle}>October 8,2021</li>
												<li className={styles.orderMobileSubTitle}>Delivered</li>
												<li className={styles.orderMobileSubTitle}>$ 105</li>
												<li className={styles.orderMobileSubTitle}>
													{' '}
													<Link className={styles.viewOrder} to='/order'>
														View Order
													</Link>
												</li>
											</ul>
										</div>
									</div>
								) : (
									<BasicTable />
								)}
							</div>
						)}
					</div>
				)}
				{activeTab === 'tab3' && (
					<div>
						<div className={styles.orders}>
							{' '}
							{visible ? (
								<div className={styles.orderAlert}>
									<div className={styles.orderAlertInfo}>
										<p>No downloads available yet.</p>
									</div>
									<div className={styles.orderAlertBlockLink}>
										<Link className={styles.orderAlertLink} to='/'>
											BROWSE PRODUCT
										</Link>
									</div>
									{/* <div className={classes.orderAlertTimer}>{timeLeft}</div> */}
								</div>
							) : (
								<div className={styles.orderTable}>
									{isMobile ? (
										<div className={styles.orderMobileContainer}>
											<div className={styles.orderMobile}>
												<ul className={styles.orderMobileList}>
													<li className={styles.orderMobileTitle}>ORDER NUMBER</li>
													<li className={styles.orderMobileTitle}>DATE</li>
													<li className={styles.orderMobileTitle}> STATUS</li>
													<li className={styles.orderMobileTitle}>TOTAL</li>
													<li className={styles.orderMobileTitle}> ACTIONS</li>
												</ul>
												<ul className={styles.orderMobileList}>
													<li className={styles.orderMobileSubTitle}>7643980998990</li>
													<li className={styles.orderMobileSubTitle}>October 8,2021</li>
													<li className={styles.orderMobileSubTitle}>Delivered</li>
													<li className={styles.orderMobileSubTitle}>$ 105</li>
													<li className={styles.orderMobileSubTitle}>
														<Link className={styles.viewOrder} to='/order'>
															View Order&nbsp;
														</Link>
														<Link className={styles.viewOrder} to='/order'>
															| Download
														</Link>
													</li>
												</ul>
											</div>
											<div className={styles.orderMobile}>
												<ul className={styles.orderMobileList}>
													<li className={styles.orderMobileTitle}>ORDER NUMBER</li>
													<li className={styles.orderMobileTitle}>DATE</li>
													<li className={styles.orderMobileTitle}> STATUS</li>
													<li className={styles.orderMobileTitle}>TOTAL</li>
													<li className={styles.orderMobileTitle}> ACTIONS</li>
												</ul>
												<ul className={styles.orderMobileList}>
													<li className={styles.orderMobileSubTitle}>7643980998990</li>
													<li className={styles.orderMobileSubTitle}>October 8,2021</li>
													<li className={styles.orderMobileSubTitle}>Delivered</li>
													<li className={styles.orderMobileSubTitle}>$ 105</li>
													<li className={styles.orderMobileSubTitle}>
														{' '}
														<Link className={styles.viewOrder} to='/order'>
															View Order&nbsp;
														</Link>
														<Link className={styles.viewOrder} to='/order'>
															| Download
														</Link>
													</li>
												</ul>
											</div>
											<div className={styles.orderMobile}>
												<ul className={styles.orderMobileList}>
													<li className={styles.orderMobileTitle}>ORDER NUMBER</li>
													<li className={styles.orderMobileTitle}>DATE</li>
													<li className={styles.orderMobileTitle}> STATUS</li>
													<li className={styles.orderMobileTitle}>TOTAL</li>
													<li className={styles.orderMobileTitle}> ACTIONS</li>
												</ul>
												<ul className={styles.orderMobileList}>
													<li className={styles.orderMobileSubTitle}>7643980998990</li>
													<li className={styles.orderMobileSubTitle}>October 8,2021</li>
													<li className={styles.orderMobileSubTitle}>Delivered</li>
													<li className={styles.orderMobileSubTitle}>$ 105</li>
													<li className={styles.orderMobileSubTitle}>
														{' '}
														<Link className={styles.viewOrder} to='/order'>
															View Order&nbsp;
														</Link>
														<Link className={styles.viewOrder} to='/order'>
															| Download
														</Link>
													</li>
												</ul>
											</div>
										</div>
									) : (
										<BasicTable download={'| Download'} />
									)}
								</div>
							)}
						</div>
					</div>
				)}
				{activeTab === 'tab4' && (
					<div className={styles.addresses}>
						<p className={styles.addressesInfo}>
							The following addresses will be used on the checkout page by default.
						</p>
						<div className={styles.addressesWrapper}>
							{view ? (
								<div className={styles.checkoutDetailsFormInfo}>
									<button
										style={{
											width: '20px',
											border: 'none',
											background: 'transparent',
											marginLeft: 'auto',
											marginRight: '30px',
										}}
										onClick={() => setView(false)}>
										Close
									</button>
									<div className={styles.checkoutDetailsFormName}>
										<Input placeholder='First name *' required='required' />
										<Input placeholder='last name *' required='required' />
									</div>
									<SelectLabels />
									<Input type='text' placeholder='Street Address *' required='required' />
									<Input
										pattern='^\d+(\.\d{1,2})?$'
										type='number'
										placeholder='Postcode / ZIP *'
										required='required'
									/>
									<Input type='text' placeholder='Town / City *' required='required' />
									<Input type='number' placeholder='Phone *' required='required' />
									<Input type='email' placeholder='Email *' required='required' />
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										<ButtonForm width='80%' title='SAVE ADDRESS' />
									</div>
								</div>
							) : (
								<div className={styles.addressesBlock}>
									<h2 className={styles.addressesTitle}>Billing address</h2>
									<button onClick={() => setView(!view)} className={styles.addressesBtn}>
										ADD
									</button>
									<p className={styles.addressesNotYet}>
										You have not set up this type of address yet.
									</p>
								</div>
							)}
							{view2 ? (
								<div className={styles.checkoutDetailsFormInfo}>
									<button
										style={{
											width: '20px',
											border: 'none',
											background: 'transparent',
											marginLeft: 'auto',
											marginRight: '30px',
										}}
										onClick={() => setView2(false)}>
										Close
									</button>
									<div className={styles.checkoutDetailsFormName}>
										<Input placeholder='First name *' required='required' />
										<Input placeholder='last name *' required='required' />
									</div>
									<SelectLabels />
									<Input type='text' placeholder='Street Address *' required='required' />
									<Input
										pattern='^\d+(\.\d{1,2})?$'
										type='number'
										placeholder='Postcode / ZIP *'
										required='required'
									/>
									<Input type='text' placeholder='Town / City *' required='required' />
									<Input type='number' placeholder='Phone *' required='required' />
									<Input type='email' placeholder='Email *' required='required' />
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										<ButtonForm width='80%' title='SAVE ADDRESS' />
									</div>
								</div>
							) : (
								<div className={styles.addressesBlock}>
									<h2 className={styles.addressesTitle}>Billing address</h2>
									<button onClick={() => setView2(!view2)} className={styles.addressesBtn}>
										ADD
									</button>
									<p className={styles.addressesNotYet}>
										You have not set up this type of address yet.
									</p>
								</div>
							)}
						</div>
					</div>
				)}
				{activeTab === 'tab5' && (
					<div className={styles.accountDetails}>
						<Title title='Account details' />
						<form className={styles.accountDetailsForm} action=''>
							<Input placeholder='First name *' required='required' />
							<Input placeholder='last name *' required='required' />
							<Input placeholder='Display name *' required='required' />
							<p className={styles.displayDescription}>
								This will be how your name will be displayed in the account section and in reviews.
							</p>
							<Input type='email' placeholder='Email *' required='required' />
							<h2 className={styles.accountDetailsFormChangePasswordTitle}>Password change</h2>
							<Input
								type='password'
								placeholder='Current password (leave blank to leave unchanged)'
								required='required'
							/>
							<Input
								type='password'
								placeholder='New password (leave blank to leave unchanged)'
								required='required'
							/>
							<Input type='password' placeholder='Confirm new password' required='required' />
							<ButtonForm width='100%' title='SAVE ADDRESS' />
						</form>
					</div>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
