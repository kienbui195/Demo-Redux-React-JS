import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
	name: 'blog',
	initialState: {
		blogs: [],
        blog: {},
        edit: {}
	},
	reducers: {
		viewPost: (state, action) => {
			state.blog = action.payload;
        },
        addnewPost: (state, action) => {
            state.blogs.push(action.payload)
        },
        like: (state, action) => {
            action.payload.type === 'like' ? state.blogs[action.payload.index].like = 1 : state.blogs[action.payload.index].dislike = 1
        },
        editData: (state, action) => {
            state.blog = action.payload.item
            state.blog = {...state.blog, index: action.payload.index}
        },

	},
});

export const { viewPost ,addnewPost, like, editData } = blogSlice.actions;

export default blogSlice.reducer;
