import { configureStore } from '@reduxjs/toolkit';
import staticDataReducer from './reducers/staticDataReducer';
import booksListReducer from './reducers/booksListReducer';

export const store = configureStore({
	reducer: {
		staticData: staticDataReducer,
		booksList: booksListReducer,
	},
});

window.store = store;
