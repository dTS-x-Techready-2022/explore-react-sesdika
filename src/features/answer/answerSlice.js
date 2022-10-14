import { createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({
	name: 'answer',
	initialState : ['','',''],
	reducers: {
		answering(state, action) {
			state[action.payload.idx] = action.payload.jawaban
		},
	},
});

export const { answering } = answerSlice.actions;
export default answerSlice.reducer;