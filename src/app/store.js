import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/LoginSlice';
import listUserReducer from '../features/listUserSlice';
import listTodoReducer from '../features/listTodoSlice'
import productsReducer from '../features/productsSlice'

export const store = configureStore({
	reducer: {
		login: loginReducer,
		list: listUserReducer,
		todo: listTodoReducer,
		products: productsReducer
	},
});
