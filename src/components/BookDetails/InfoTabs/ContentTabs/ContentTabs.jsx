import React from 'react';
import s from './ContentTabs.module.scss';
import StarRating from '../../../common/StarRating/StarRating';
import { useSelector } from 'react-redux';

const ContentTabs = ({ activeTab }) => {
	const { bookDetails, loading } = useSelector(state => state.booksList);

	if (loading) return <p></p>;
	if (!bookDetails?.volumeInfo) return <p>Книга не найдена</p>; // Проверяем bookDetails перед деструктуризацией обязательно!
	const { volumeInfo } = bookDetails;
	const { description, pageCount, publisher, dimensions, language } = volumeInfo || {};

	return (
		<div className={s.tabsContent}>
			{activeTab === 'tab1' && (
				<p id='readmore' className={s.tabDescription}>
					{description?.replace(/<\/?[a-zA-Z]+>/gi, '').replace(/&quot;(.*?)&quot;/g, '$1') ||
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, molestiae perferendis sapiente molestias dolores quae? Nostrum voluptates illum harum beatae voluptatum saepe explicabo rem, facilis ab, id culpa aspernatur ex.'}
				</p>
			)}

			{activeTab === 'tab2' && (
				<ul className={s.tabInfo}>
					<li className={s.tabInfoItem}>
						Page count:&nbsp;&nbsp;<span className={s.tabInfoValue}>{pageCount ? pageCount : 300} pages</span>
					</li>
					<li className={s.tabInfoItem}>
						Dimentions:&nbsp;&nbsp;
						<span className={s.tabInfoValue}>
							{Math.floor(dimensions?.height) || '23 cm'} x {Math.floor(dimensions?.width) || '13 cm'} x {Math.floor(dimensions?.thickness) || '1 cm'}
						</span>
					</li>
					<li className={s.tabInfoItem}>
						Language:&nbsp;&nbsp;<span className={s.tabInfoValue}>{language ? language : 'Unknown'}</span>
					</li>
					<li className={s.tabInfoItem}>
						Publisher:&nbsp;&nbsp;<span className={s.tabInfoValue}>{publisher ? publisher : 'Unknown'}</span>
					</li>
				</ul>
			)}
			{activeTab === 'tab3' && (
				<div className={s.blockReviews}>
					<div className={s.allReviews}>
						<h2 className={s.headerReviews}>2 Reviews for lira earings</h2>
						<div className={s.review}>
							<h3 className={s.headerReview}>
								Scarlet withch
								<span className={s.dateReview}>6 May, 2020</span>
							</h3>
							<div className={s.ratingReview}>
								<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<g clipPath='url(#clip0_988_1210)'>
										<path
											d='M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z'
											fill='black'
										/>
									</g>
									<defs>
										<clipPath id='clip0_988_1210'>
											<rect width='18' height='18' fill='white' />
										</clipPath>
									</defs>
								</svg>
								<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<g clipPath='url(#clip0_988_1210)'>
										<path
											d='M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z'
											fill='black'
										/>
									</g>
									<defs>
										<clipPath id='clip0_988_1210'>
											<rect width='18' height='18' fill='white' />
										</clipPath>
									</defs>
								</svg>
								<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<g clipPath='url(#clip0_988_1210)'>
										<path
											d='M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z'
											fill='black'
										/>
									</g>
									<defs>
										<clipPath id='clip0_988_1210'>
											<rect width='18' height='18' fill='white' />
										</clipPath>
									</defs>
								</svg>
								<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M17.085 6.74504L17.0851 6.74506C17.2664 6.76146 17.4205 6.88398 17.4773 7.05839C17.5344 7.23412 17.4816 7.42451 17.3441 7.54519L13.4164 10.9892L13.1925 11.1855L13.2585 11.4759L14.4165 16.5761C14.4573 16.757 14.3872 16.9416 14.2392 17.0485L14.2388 17.0488C14.0903 17.1564 13.8933 17.165 13.7363 17.0711L9.25665 14.3921L9.00005 14.2387L8.74343 14.3921L4.26286 17.0712L4.26272 17.0712C4.19024 17.1146 4.10961 17.136 4.0289 17.136C3.93458 17.136 3.84149 17.1071 3.76181 17.0492L3.76082 17.0485C3.61289 16.9416 3.54275 16.7571 3.58354 16.5763C3.58356 16.5762 3.58357 16.5762 3.58358 16.5761L4.74158 11.4759L4.8075 11.1855L4.58364 10.9892L0.655856 7.54511C0.655844 7.5451 0.655833 7.54509 0.655821 7.54508C0.518482 7.42461 0.465875 7.23389 0.522437 7.05923C0.579917 6.88453 0.734077 6.76192 0.915387 6.74502C0.915529 6.745 0.915672 6.74499 0.915815 6.74498L6.11196 6.27331L6.4093 6.24632L6.52658 5.97176L8.58009 1.16406L8.58019 1.16382C8.65224 0.994891 8.81636 0.886475 9.00002 0.886475C9.18324 0.886475 9.34781 0.994537 9.42094 1.16443C9.421 1.16458 9.42107 1.16473 9.42113 1.16488L11.4743 5.97176L11.5916 6.24632L11.8889 6.27331L17.085 6.74504Z'
										stroke='black'
									/>
								</svg>
								<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M17.085 6.74504L17.0851 6.74506C17.2664 6.76146 17.4205 6.88398 17.4773 7.05839C17.5344 7.23412 17.4816 7.42451 17.3441 7.54519L13.4164 10.9892L13.1925 11.1855L13.2585 11.4759L14.4165 16.5761C14.4573 16.757 14.3872 16.9416 14.2392 17.0485L14.2388 17.0488C14.0903 17.1564 13.8933 17.165 13.7363 17.0711L9.25665 14.3921L9.00005 14.2387L8.74343 14.3921L4.26286 17.0712L4.26272 17.0712C4.19024 17.1146 4.10961 17.136 4.0289 17.136C3.93458 17.136 3.84149 17.1071 3.76181 17.0492L3.76082 17.0485C3.61289 16.9416 3.54275 16.7571 3.58354 16.5763C3.58356 16.5762 3.58357 16.5762 3.58358 16.5761L4.74158 11.4759L4.8075 11.1855L4.58364 10.9892L0.655856 7.54511C0.655844 7.5451 0.655833 7.54509 0.655821 7.54508C0.518482 7.42461 0.465875 7.23389 0.522437 7.05923C0.579917 6.88453 0.734077 6.76192 0.915387 6.74502C0.915529 6.745 0.915672 6.74499 0.915815 6.74498L6.11196 6.27331L6.4093 6.24632L6.52658 5.97176L8.58009 1.16406L8.58019 1.16382C8.65224 0.994891 8.81636 0.886475 9.00002 0.886475C9.18324 0.886475 9.34781 0.994537 9.42094 1.16443C9.421 1.16458 9.42107 1.16473 9.42113 1.16488L11.4743 5.97176L11.5916 6.24632L11.8889 6.27331L17.085 6.74504Z'
										stroke='black'
									/>
								</svg>
							</div>
							<p className={s.descriptionReview}>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis illum quasi voluptate magni recusandae doloribus, modi incidunt totam cum culpa sunt consequuntur, aliquid
								voluptatem quidem eos illo vitae. Fugiat, soluta.
							</p>
						</div>
						<div className={s.review}>
							<h3 className={s.headerReview}>
								Scarlet withch
								<span className={s.dateReview}>6 May, 2020</span>
							</h3>
							<div className={s.ratingReview}>
								<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<g clipPath='url(#clip0_988_1210)'>
										<path
											d='M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z'
											fill='black'
										/>
									</g>
									<defs>
										<clipPath id='clip0_988_1210'>
											<rect width='18' height='18' fill='white' />
										</clipPath>
									</defs>
								</svg>
								<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<g clipPath='url(#clip0_988_1210)'>
										<path
											d='M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z'
											fill='black'
										/>
									</g>
									<defs>
										<clipPath id='clip0_988_1210'>
											<rect width='18' height='18' fill='white' />
										</clipPath>
									</defs>
								</svg>
								<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<g clipPath='url(#clip0_988_1210)'>
										<path
											d='M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z'
											fill='black'
										/>
									</g>
									<defs>
										<clipPath id='clip0_988_1210'>
											<rect width='18' height='18' fill='white' />
										</clipPath>
									</defs>
								</svg>
								<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M17.085 6.74504L17.0851 6.74506C17.2664 6.76146 17.4205 6.88398 17.4773 7.05839C17.5344 7.23412 17.4816 7.42451 17.3441 7.54519L13.4164 10.9892L13.1925 11.1855L13.2585 11.4759L14.4165 16.5761C14.4573 16.757 14.3872 16.9416 14.2392 17.0485L14.2388 17.0488C14.0903 17.1564 13.8933 17.165 13.7363 17.0711L9.25665 14.3921L9.00005 14.2387L8.74343 14.3921L4.26286 17.0712L4.26272 17.0712C4.19024 17.1146 4.10961 17.136 4.0289 17.136C3.93458 17.136 3.84149 17.1071 3.76181 17.0492L3.76082 17.0485C3.61289 16.9416 3.54275 16.7571 3.58354 16.5763C3.58356 16.5762 3.58357 16.5762 3.58358 16.5761L4.74158 11.4759L4.8075 11.1855L4.58364 10.9892L0.655856 7.54511C0.655844 7.5451 0.655833 7.54509 0.655821 7.54508C0.518482 7.42461 0.465875 7.23389 0.522437 7.05923C0.579917 6.88453 0.734077 6.76192 0.915387 6.74502C0.915529 6.745 0.915672 6.74499 0.915815 6.74498L6.11196 6.27331L6.4093 6.24632L6.52658 5.97176L8.58009 1.16406L8.58019 1.16382C8.65224 0.994891 8.81636 0.886475 9.00002 0.886475C9.18324 0.886475 9.34781 0.994537 9.42094 1.16443C9.421 1.16458 9.42107 1.16473 9.42113 1.16488L11.4743 5.97176L11.5916 6.24632L11.8889 6.27331L17.085 6.74504Z'
										stroke='black'
									/>
								</svg>
								<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M17.085 6.74504L17.0851 6.74506C17.2664 6.76146 17.4205 6.88398 17.4773 7.05839C17.5344 7.23412 17.4816 7.42451 17.3441 7.54519L13.4164 10.9892L13.1925 11.1855L13.2585 11.4759L14.4165 16.5761C14.4573 16.757 14.3872 16.9416 14.2392 17.0485L14.2388 17.0488C14.0903 17.1564 13.8933 17.165 13.7363 17.0711L9.25665 14.3921L9.00005 14.2387L8.74343 14.3921L4.26286 17.0712L4.26272 17.0712C4.19024 17.1146 4.10961 17.136 4.0289 17.136C3.93458 17.136 3.84149 17.1071 3.76181 17.0492L3.76082 17.0485C3.61289 16.9416 3.54275 16.7571 3.58354 16.5763C3.58356 16.5762 3.58357 16.5762 3.58358 16.5761L4.74158 11.4759L4.8075 11.1855L4.58364 10.9892L0.655856 7.54511C0.655844 7.5451 0.655833 7.54509 0.655821 7.54508C0.518482 7.42461 0.465875 7.23389 0.522437 7.05923C0.579917 6.88453 0.734077 6.76192 0.915387 6.74502C0.915529 6.745 0.915672 6.74499 0.915815 6.74498L6.11196 6.27331L6.4093 6.24632L6.52658 5.97176L8.58009 1.16406L8.58019 1.16382C8.65224 0.994891 8.81636 0.886475 9.00002 0.886475C9.18324 0.886475 9.34781 0.994537 9.42094 1.16443C9.421 1.16458 9.42107 1.16473 9.42113 1.16488L11.4743 5.97176L11.5916 6.24632L11.8889 6.27331L17.085 6.74504Z'
										stroke='black'
									/>
								</svg>
							</div>
							<p className={s.descriptionReview}>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis illum quasi voluptate magni recusandae doloribus, modi incidunt totam cum culpa sunt consequuntur, aliquid
								voluptatem quidem eos illo vitae. Fugiat, soluta.
							</p>
						</div>
					</div>
					<div className={s.addReviews}>
						<h2 className={s.titleAddReviews}>Add a Review</h2>
						<h3 className={s.subtitleAddReviews}>Your email address will not be published. Required fields are marked *</h3>
						<form className={s.addReviewsForm} action=''>
							<input className={s.addReviewsFormInput} type='text' placeholder='Your Review*' />
							<input className={s.addReviewsFormInput} type='text' placeholder='Enter your name*' />
							<input className={s.addReviewsFormInput} type='text' placeholder='Enter your Email*' />
							<div className={s.addReviewsCheckbox}>
								<input className={s.addReviewsCheckboxInput} type='checkbox' />{' '}
								<span className={s.addReviewsCheckboxInfo}>Save my name, email, and website in this browser for the next time I comment</span>
							</div>
							<div className={s.addReviewsRating}>
								<p className={s.addReviewsRatingTitle}>Your Rating*</p>
								<StarRating />
							</div>
							<button className={s.addReviewsBtn}>Submit</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default ContentTabs;
