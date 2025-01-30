import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'AIzaSyAmAcNt2YEJaAyzDMRxBsDxafm-3tC3bY4';
const initialState = {
	popularBooks: [],
	loading: false,
	error: null,
};

// Асинхронное действие для получения популярных книг
export const fetchPopularBooks = createAsyncThunk('books/fetchPopularBooks', async () => {
	const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=10&orderBy=relevance&key=${API_KEY}`);
	if (!response.ok) {
		throw new Error('Ошибка при загрузке данных');
	}
	const data = await response.json();
	console.log('API Response:', data);
	return data.items || [];
});

const booksListReducer = createSlice({
	name: 'books',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchPopularBooks.pending, state => {
				state.loading = true;
				state.error = null; // Сбрасываем ошибку
			})
			.addCase(fetchPopularBooks.fulfilled, (state, action) => {
				state.loading = false;
				state.popularBooks = action.payload;
			})
			.addCase(fetchPopularBooks.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message; // Записываем сообщение об ошибке
			});
	},
});

export const { clearBooks } = booksListReducer.actions;
export default booksListReducer.reducer;
