import { createSlice } from '@reduxjs/toolkit';

const listUserSlice = createSlice({
	name: 'list',
	initialState: {
		users: [],
      
	},
	reducers: {
		setList: (state, action) => {
			state.users = action.payload;
		},
	},
});

export const { setList } = listUserSlice.actions;

export default listUserSlice.reducer;
