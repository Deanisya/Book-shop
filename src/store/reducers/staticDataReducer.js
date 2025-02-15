import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	links: [
		{ id: 1, title: 'Shop' },
		{ id: 2, title: 'Blog' },
		{ id: 3, title: 'Our story' },
	],
	quotes: [
		'«You can never be overdressed or overeducated.» - Oscar Wilde',
		'«Success is not the key to happiness. Happiness is the key to success.» - Herman Cain',
		'«We do not remember days, we remember moments.» - Cesare Pavese',
		'«Always forgive your enemies. Nothing annoys them more.» - Oscar Wilde',
		'«Only two things are infinite — the universe and human stupidity, and I’m not sure about the former.» - Albert Einstein',
		'«Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.» - Brian Tracy',
		'«The  biggest  risk  is  not  taking  any  risk.  In a  world  that’s  changing  really  quickly, the only strategy  that  is  guaranteed  to  fail  is  not  taking  risks.» - Mark Zuckerberg',
		'«Our  life  is  what  our  thoughts  make  it.» - M. Aurelius',
		'«Success is one percent inspiration, ninety-nine percent perspiration.» - Thomas Edison',
	],
};

const staticDataReducer = createSlice({
	name: 'staticData',
	initialState,
	reducers: {},
});

export default staticDataReducer.reducer;
