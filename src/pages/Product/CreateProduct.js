import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../features/productsSlice';
import { useNavigate } from 'react-router-dom';
import {deleteItem} from '../../features/productsSlice'

const CreateProduct = () => {
	const products = useSelector(state => state.products.products);

	const [product, setProduct] = useState({
		name: '',
		quantity: 0,
		price: 0,
		totalMoney: 0,
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();

		const item = products.filter(item => item.name === product.name);
		if (item.length === 0) {
			dispatch(
				addProduct({	
					name: product.name,
					quantity: product.quantity,
					price: product.price,
					totalMoney: product.quantity * product.price,
				})
			);
			navigate('/product');
		} else {
			dispatch(deleteItem(product.name))
			dispatch(
				addProduct({
					name: product.name,
					quantity: +product.quantity + +item[0].quantity,
					price: product.price,
					totalMoney: product.quantity * product.price,
				})
			);
			navigate('/product');
		}
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<form method='post' onSubmit={handleSubmit}>
				<h3>Create</h3>
				<div>
					<input
						placeholder='Name'
						required
						name='name'
						type='text'
						onChange={e => setProduct({ ...product, name: e.target.value })}
					/>
				</div>
				<div>
					<input
						placeholder='quantity'
						required
						onChange={e => setProduct({ ...product, quantity: e.target.value })}
						type='number'
					/>
				</div>
				<div>
					<input
						placeholder='price'
						required
						onChange={e => setProduct({ ...product, price: e.target.value })}
						type='number'
					/>
				</div>
				<button type='submit'>Create</button>
			</form>
			<button onClick={() => navigate('/product')} type='button'>
				Back
			</button>
		</div>
	);
};

export default CreateProduct;
