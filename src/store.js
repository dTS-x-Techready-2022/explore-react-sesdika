import { configureStore } from '@reduxjs/toolkit';

import answerReducer from './features/answer/answerSlice';

export default configureStore({
	reducer : {
		answer : answerReducer
	}
});