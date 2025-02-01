import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'AIzaSyAmAcNt2YEJaAyzDMRxBsDxafm-3tC3bY4';
const initialState = {
	popularBooks: [],
	books: [],
	query: '',
	loading: false,
	error: null,
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
	const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=12&orderBy=relevance&key=${API_KEY}`);
	if (!response.ok) {
		throw new Error('Ошибка при загрузке данных');
	}
	const data = await response.json();

	// Сохраняем результат в localStorage
	// localStorage.setItem('popularBooks', JSON.stringify(data.items || []));

	return data.items || [];
});

// 🔹 Асинхронный экшен для поиска книг
export const fetchBooks = createAsyncThunk('books/fetchBooks', async ({ searchQuery, startIndex }) => {
	const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${startIndex}&maxResults=8&key=${API_KEY}`);
	const data = await response.json();
	return data.items || [];
});

const booksListReducer = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setQuery(state, action) {
			state.query = action.payload;

			state.books = [];
			state.page = 0;
		},
		// incrementPage(state) {
		// 	state.page += 1;
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
				state.books.push(...action.payload);
			})
			.addCase(fetchBooks.rejected, state => {
				state.loading = false;
				state.error = 'Ошибка при загрузке данных.';
			});
	},
});

export const { setQuery, incrementPage } = booksListReducer.actions;
export default booksListReducer.reducer;
