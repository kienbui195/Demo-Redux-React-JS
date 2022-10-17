import { createSlice } from '@reduxjs/toolkit';

const listUserSlice = createSlice({
	name: 'todo',
	initialState: {
		task: [],
	},
	reducers: {
		setList: (state, action) => {
			state.task.push(action.payload);
		},
		deleteTask: (state, action) => {
			state.task.splice(action.payload, 1);
		},
	},
});

export const { setList , deleteTask} = listUserSlice.actions;

export default listUserSlice.reducer;
