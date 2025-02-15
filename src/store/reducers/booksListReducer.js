import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'AIzaSyAmAcNt2YEJaAyzDMRxBsDxafm-3tC3bY4';
const initialState = {
	popularBooks: [],
	filterPopularBooks: [],
	books: [],
	allBooks: [],
	bookDetails: null,
	query: '',
	loading: false,
	error: null,
	filterByPrice: false,
	isSearching: false,
	category: '', // надо сделать
	favorites: [],
	page: 0, // ?
	totalPages: 0, // Количество страниц для пагинации ?
	inStock: false,
};

// Асинхронное действие для получения популярных книг
export const fetchPopularBooks = createAsyncThunk('books/fetchPopularBooks', async () => {
	const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=history+popular&maxResults=12&orderBy=relevance&key=${API_KEY}`);
	const data = await response.json();
	return data.items || [];
});

// 🔹 Асинхронный экшен для поиска книг
export const fetchBooks = createAsyncThunk('books/fetchBooks', async ({ searchQuery, category, page = 0 }) => {
	const query = searchQuery ? searchQuery : category ? category : 'history+popular'; // Если searchQuery пустой, используем дефолтное значение
	const encodedQuery = encodeURIComponent(query);
	const startIndex = page * 10; // 🔹 Вычисляем стартовый индекс
	const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodedQuery}&startIndex=${startIndex}&maxResults=20&key=${API_KEY}`);
	const data = await response.json();

	return { books: data.items || [], page };
});

// 🔹 Асинхронный экшен для деталей книги
export const fetchDetailsBooks = createAsyncThunk('bookDetails/fetchBooks', async ({ id }) => {
	if (!id) throw new Error('ID книги не передан');
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
			state.page = 0; // Сбрасываем пагинацию при новом поиске
			state.books = [];
		},
		toggleFilterByInStock(state) {
			state.inStock = !state.inStock;

			if (state.inStock) {
				// Фильтруем только книги с ценой
				state.books = state.allBooks.filter(book => book.saleInfo?.listPrice?.amount !== undefined);
			} else {
				// Возвращаем полный список книг
				state.books = [...state.allBooks];
			}
		},

		setIsSearching: (state, action) => {
			state.isSearching = action.payload;
			state.books = [];
		},
		clearBookDetails(state) {
			state.bookDetails = null;
		},
		incrementPage(state) {
			state.page += 1; // Увеличиваем страницу при скролле вниз
		},
		addToFavorites(state, action) {
			const book = action.payload;

			if (!state.favorites.find(fav => fav.id === book.id)) {
				state.favorites.push(book);
			}
		},
		removeFromFavorites(state, action) {
			state.favorites = state.favorites.filter(fav => fav.id !== action.payload);
		},
		setCategory(state, action) {
			state.category = action.payload;
			state.books = [];
		},
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
				const combinedBooks = [...state.books, ...action.payload.books];
				state.books = combinedBooks.filter((book, index, self) => self.findIndex(b => b.id === book.id) === index);
				state.allBooks = action.payload.books;
				// Обновляем страницу (берем из action.payload)
				state.page = action.payload.page;
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

export const { setQuery, incrementPage, clearBookDetails, toggleFilterByPrice, setIsSearching, addToFavorites, removeFromFavorites, setCategory, toggleFilterByInStock } = booksListReducer.actions;
export default booksListReducer.reducer;
