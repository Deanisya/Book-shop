import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'AIzaSyAmAcNt2YEJaAyzDMRxBsDxafm-3tC3bY4';
const initialState = {
	popularBooks: [],
	filterPopularBooks: [],
	books: [],
	bookDetails: null,
	query: '',
	loading: false,
	error: null,
	filterByPrice: false,
	isSearching: false,
	genre: '', // надо сделать
	favourites: '', // и тут
};

// Асинхронное действие для получения популярных книг
export const fetchPopularBooks = createAsyncThunk('books/fetchPopularBooks', async () => {
	// Проверяем, есть ли кешированные данные
	// const cachedBooks = localStorage.getItem('popularBooks');
	// if (cachedBooks) {
	// 	console.log('Загружаем книги из localStorage');
	// 	return JSON.parse(cachedBooks);
	// }

	// Если данных нет — делаем запрос
	const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=history+popular&maxResults=40&orderBy=relevance&key=${API_KEY}`);
	// if (!response.ok) {
	// 	throw new Error('Ошибка при загрузке данных');
	// }
	const data = await response.json();

	// Сохраняем результат в localStorage
	// localStorage.setItem('popularBooks', JSON.stringify(data.items || []));

	return data.items || [];
});

// 🔹 Асинхронный экшен для поиска книг
export const fetchBooks = createAsyncThunk('books/fetchBooks', async ({ searchQuery, startIndex = 0 }) => {
	const encodedQuery = encodeURIComponent(searchQuery);
	const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodedQuery}&startIndex=${startIndex}&maxResults=20&key=${API_KEY}`);
	const data = await response.json();

	return data.items || [];
});
// 🔹 Асинхронный экшен для деталей книги
export const fetchDetailsBooks = createAsyncThunk('bookDetails/fetchBooks', async ({ id }) => {
	const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`);
	const data = await response.json();
	console.log(data);

	return data;
});

const booksListReducer = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setQuery(state, action) {
			state.query = action.payload;
			// state.books = [];
			state.page = 0;
		},
		setIsSearching: (state, action) => {
			state.isSearching = action.payload;
			state.books = [];
		},
		clearBookDetails(state) {
			state.bookDetails = null;
		},
		// toggleFilterByPrice(state) {
		// 	state.filterByPrice = !state.filterByPrice;

		// 	if (state.filterByPrice) {
		// 		// Фильтруем только книги с ценой
		// 		state.books = state.books.filter(book => book?.saleInfo?.listPrice?.amount);
		// 		state.filterPopularBooks = state.popularBooks.filter(book => book?.saleInfo?.listPrice?.amount);
		// 	} else {
		// 		// Возвращаем исходные данные
		// 		state.books = [...state.popularBooks];
		// 	}
		// },
	},
	extraReducers: builder => {
		builder
			// популярные книги
			.addCase(fetchPopularBooks.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchPopularBooks.fulfilled, (state, action) => {
				state.loading = false;
				state.popularBooks = action.payload;
				state.filterPopularBooks = action.payload;
			})
			.addCase(fetchPopularBooks.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			// книги
			.addCase(fetchBooks.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchBooks.fulfilled, (state, action) => {
				state.loading = false;

				// Объединяем книги и убираем дубликаты
				const combinedBooks = [...state.books, ...action.payload];
				state.books = combinedBooks.filter((book, index, self) => self.findIndex(b => b.id === book.id) === index);
			})
			.addCase(fetchBooks.rejected, state => {
				state.loading = false;
				state.error = 'Ошибка при загрузке данных.';
			})
			// Детали книги
			.addCase(fetchDetailsBooks.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchDetailsBooks.fulfilled, (state, action) => {
				state.loading = false;
				state.bookDetails = action.payload; // Сохраняем объект книги
			})
			.addCase(fetchDetailsBooks.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { setQuery, incrementPage, clearBookDetails, toggleFilterByPrice, setIsSearching } = booksListReducer.actions;
export default booksListReducer.reducer;
