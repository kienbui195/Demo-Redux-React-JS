import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, getTotalMoney, checkOut } from '../../features/productsSlice';
import { useEffect } from 'react';

const Product = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const products = useSelector(state => state.products.products);
	const cart = useSelector(state => state.products.cart);
	let totalMoney = 0;

	const handleAddCart = index => {
		dispatch(addToCart(index));
	};

	useEffect(() => {
		cart.forEach(element => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			totalMoney += element.totalMoney;
		});
		dispatch(getTotalMoney(totalMoney));
	}, [cart]);

	const handleCheck = () => {
		dispatch(checkOut());
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<h1>Shopping Cart</h1>
			<button onClick={() => navigate('/create')}>Create Product</button>
			<hr />
			<h3>Products</h3>
			<ul>
				{products.map((item, index) => (
					<li key={index}>
						<div>
							{item.name} - ${item.price} {item.quantity > 0 ? 'x' : ''} {item.quantity > 0 ? item.quantity : ''}
						</div>
						{item.quantity > 0 ? (
							<button onClick={() => handleAddCart(index)}>Add to cart</button>
						) : (
							<button disabled>Sold out</button>
						)}
					</li>
				))}
			</ul>

			<hr />
			<h3>Your Cart</h3>
			<ul>
				{cart.length === 0
					? 'Add some products to your cart'
					: cart.map((product, index) => <li key={index}>Total: $ {product.price * product.quantity}</li>)}
			</ul>
			<button onClick={handleCheck}>Check Out</button>
		</div>
	);
};

export default Product;
