import { configureStore } from '@reduxjs/toolkit';
import staticDataReducer from './reducers/staticDataReducer';

export const store = configureStore({
	reducer: {
		staticData: staticDataReducer,
	},
});

window.store = store;
