import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	links: [
		{ id: 1, title: 'Shop' },
		{ id: 2, title: 'Blog' },
		{ id: 3, title: 'Our story' },
	],
};

const staticDataReducer = createSlice({
	name: 'staticData',
	initialState,
	reducers: {},
});

export default staticDataReducer.reducer;
