import React, { useEffect } from 'react';
import Counter from '../../common/Counter/Counter';
import AddInCart from '../../common/AddInCart/AddInCart';
import MyFavorites from '../../common/MyFavorites/MyFavorites';
import s from './OneBookDetails.module.scss';
import BlockMedia from '../../common/BlockMedia/BlockMedia';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearBookDetails, fetchDetailsBooks } from '../../../store/reducers/booksListReducer';

const OneBookDetails = ({ reviewsCount }) => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { bookDetails, error, loading } = useSelector(state => state.booksList);
	const { items } = useSelector(state => state.cart);

	useEffect(() => {
		dispatch(clearBookDetails());
		dispatch(fetchDetailsBooks({ id }));
		return () => {
			dispatch(clearBookDetails());
		};
	}, [dispatch, id]);

	if (loading) return <p>Загрузка...</p>;
	if (error) return <p>Ошибка: {error}</p>;
	if (!bookDetails?.volumeInfo) return <p>Книга не найдена</p>; // Проверяем bookDetails перед деструктуризацией обязательно!

	const { volumeInfo, saleInfo } = bookDetails;
	const { title, description, authors, categories, publishedDate } = volumeInfo || {};
	const { listPrice } = saleInfo || {};

	const book = {
		id,
		volumeInfo,
		saleInfo,
		title,
	};

	function shortenTitle(title, maxLength) {
		if (title.length > maxLength) {
			return title.slice(0, maxLength) + '...';
		}
		return title;
	} // функция чтобы укоротить слишком длинный заголовок книги, в некоторых местах использую просто slice, но минус что нет проверки на длину слова
	return (
		<div className={s.oneBookDetails}>
			<h1 className={s.bookHeader}>{title}</h1>

			<p>Written By: {authors}</p>
			<p>
				Book published on:
				{publishedDate}
			</p>
			<span className={s.bookPrice}>{listPrice ? `${Math.round(listPrice.amount)} $` : 'Распродано'}</span>
			<div className={s.bookRaiting}>
				<div className={s.bookRaitingStars}>
					<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g clipPath='url(#clip0_888_1330)'>
							<path
								d='M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z'
								fill='black'
							/>
						</g>
						<defs>
							<clipPath id='clip0_888_1330'>
								<rect width='18' height='18' fill='white' />
							</clipPath>
						</defs>
					</svg>
					<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g clipPath='url(#clip0_888_1330)'>
							<path
								d='M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z'
								fill='black'
							/>
						</g>
						<defs>
							<clipPath id='clip0_888_1330'>
								<rect width='18' height='18' fill='white' />
							</clipPath>
						</defs>
					</svg>
					<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g clipPath='url(#clip0_888_1330)'>
							<path
								d='M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z'
								fill='black'
							/>
						</g>
						<defs>
							<clipPath id='clip0_888_1330'>
								<rect width='18' height='18' fill='white' />
							</clipPath>
						</defs>
					</svg>
					<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g clipPath='url(#clip0_888_1330)'>
							<path
								d='M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z'
								fill='black'
							/>
						</g>
						<defs>
							<clipPath id='clip0_888_1330'>
								<rect width='18' height='18' fill='white' />
							</clipPath>
						</defs>
					</svg>
					<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g clipPath='url(#clip0_888_1330)'>
							<path
								d='M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z'
								fill='black'
							/>
						</g>
						<defs>
							<clipPath id='clip0_888_1330'>
								<rect width='18' height='18' fill='white' />
							</clipPath>
						</defs>
					</svg>
				</div>
				<span className={s.bookRaitingDescription}>{reviewsCount}2 customer review</span>
			</div>
			<p className={s.bookDescription}>
				{shortenTitle(
					description?.replace(/<\/?[a-zA-Z]+>/gi, '') ||
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, molestiae perferendis sapiente molestias dolores quae? Nostrum voluptates illum harum beatae voluptatum saepe explicabo rem, facilis ab, id culpa aspernatur ex.',
					200
				)}
				<a className={s.bookDescriptionLink} href='#readmore'>
					&nbsp;read more
				</a>
			</p>
			<div className={s.bookIconsBlock}>
				{' '}
				{listPrice ? <div className={s.blockAddBookToCart}>{items[book.id]?.quantity > 0 ? <Counter id={id} /> : <AddInCart book={book} addInCartBookDet />}</div> : ''}
				<div className={s.blockWishlistAndMedia}>
					<MyFavorites book={book} />
					<BlockMedia />
				</div>
			</div>

			<div className={s.blockSku}>
				<p className={s.sku}>Categories:</p>
				<span className={s.blockSkuValue}>{categories ? categories : 'no category'}</span>
			</div>
		</div>
	);
};

export default OneBookDetails;
