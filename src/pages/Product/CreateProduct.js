import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addProduct} from '../../features/productsSlice'
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
    
	const [product, setProduct] = useState({
		name: '',
		quantity: '',
		price: '',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(product))
        navigate('/product')
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
            <button onClick={()=>navigate('/product')} type='button'>Back</button>
		</div>
	);
};

export default CreateProduct;
