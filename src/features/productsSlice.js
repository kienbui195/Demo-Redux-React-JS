import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
		total: 0,
		cart: [],
	},
	reducers: {
		getList: (state, action) => {
			state.products = action.payload;
		},
		addProduct: (state, action) => {
			state.products.push(action.payload);
		},
		addToCart: (state, action) => {
			const product = state.products[action.payload];
			const prodInCart = state.cart.filter(item => (item.name = product.name));
			if (prodInCart.length === 0) {
				state.cart.push({
					name: product.name,
					quantity: 1,
					price: product.price,
					totalMoney: product.price * 1,
				});
				product.quantity -= 1;
			} else {
				state.cart[0].quantity += 1;
				state.cart[0].totalMoney = state.cart[0].price * state.cart[0].quantity;
				product.quantity -= 1;
			}
		},
		getTotalMoney: (state, action) => {
			state.total = action.payload;
		},
		checkOut: (state, action) => {
			state.total = 0;
			state.cart = [];
		},
		deleteItem: (state, action) => {
			const item = state.products.filter(item => (item.name = action.payload));

			const index = state.products.indexOf(item);

			state.products.splice(index, 1);
		},
	},
});

export const { getUser, addProduct, addToCart, getTotalMoney, checkOut, deleteItem } = productsSlice.actions;

export default productsSlice.reducer;
