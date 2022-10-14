import { createSlice } from "@reduxjs/toolkit";

const initialState = { answer : ['','',''], kunci : ['','',''] };

const answerSlice = createSlice({
	name: 'answer',
	// initialState : ['','',''],
	initialState,
	reducers: {
		answering(state, action) {
			state.answer[action.payload.idx] = action.payload.jawaban
		},
		isiKunci(state, action) {
			state.kunci[action.payload.idx] = action.payload.kunci
		},
	},
});

export const { answering, isiKunci } = answerSlice.actions;
export default answerSlice.reducer;