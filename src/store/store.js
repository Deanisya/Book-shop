import { configureStore } from '@reduxjs/toolkit';
import staticDataReducer from './reducers/staticDataReducer';
import booksListReducer from './reducers/booksListReducer';
import cartReducer from './reducers/cartReducer';

export const store = configureStore({
	reducer: {
		staticData: staticDataReducer,
		booksList: booksListReducer,
		cart: cartReducer,
	},
});

window.store = store;
