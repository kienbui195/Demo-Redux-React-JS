import {createSlice} from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        total: 0
    },
    reducers: {
        getList: (state, action) => {
            state.products = action.payload;
        },
        addProduct: (state, action) => {
            state.products.push(action.payload);
        }
    }
})

export const { getUser, addProduct } = productsSlice.actions

export default productsSlice.reducer


