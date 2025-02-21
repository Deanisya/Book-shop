import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'AIzaSyBIVxIvSaQTE85dQ5QFppLL8L3AbOroapg';
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
	category: '',
	favorites: [],
	page: 0,
	inStock: false,
	maxPrice: 15000,
	minPrice: 0,
};

// Асинхронное действие для получения популярных книг для отрисовки на главной странице
export const fetchPopularBooks = createAsyncThunk('books/fetchPopularBooks', async () => {
	const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=history+popular&maxResults=18&orderBy=relevance&key=${API_KEY}`);
	const data = await response.json();
	return data.items || [];
});

// 🔹 Асинхронный экшен для поиска книг
export const fetchBooks = createAsyncThunk('books/fetchBooks', async ({ searchQuery, category, page = 0 }) => {
	const query = searchQuery || category || 'history+popular';
	const encodedQuery = encodeURIComponent(query);
	const startIndex = page * 20;

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
		setInStock(state, action) {
			state.inStock = action.payload;
		},
		setQuery(state, action) {
			state.query = action.payload;
			state.page = 0; // Сбрасываем пагинацию при новом поиске
		},
		setIsSearching: (state, action) => {
			state.isSearching = action.payload;
			state.books = [];
		},
		clearBookDetails(state) {
			state.bookDetails = null;
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
		toggleFilterByInStock(state) {
			state.inStock = !state.inStock;

			if (state.inStock) {
				state.books = state.allBooks.filter(book => book.saleInfo?.listPrice?.amount !== undefined);
			} else {
				state.books = [...state.allBooks];
			}
		},
		setPriceRange(state, action) {
			const { min, max } = action.payload;
			state.minPrice = min;
			state.maxPrice = max;

			state.books = state.allBooks.filter(book => {
				const price = book.saleInfo?.listPrice?.amount || 0;
				return price >= min && price <= max;
			});
		},
		setPage(state, action) {
			state.page = action.payload;
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
				state.books = action.payload.books;
				state.allBooks = action.payload.books;
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
				state.bookDetails = action.payload;
			})
			.addCase(fetchDetailsBooks.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { setQuery, setInStock, clearBookDetails, toggleFilterByPrice, setIsSearching, addToFavorites, removeFromFavorites, setCategory, toggleFilterByInStock, setPriceRange, setPage } =
	booksListReducer.actions;
export default booksListReducer.reducer;
