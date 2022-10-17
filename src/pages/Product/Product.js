
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Product = () => {

    const navigate = useNavigate()
    const products = useSelector(state => state.products.products)
    const money = useSelector(state => state.products.total)
    
    const handleAddCart = index => {

    }

	return (
		<div style={{textAlign:'center'}}>
            <h1>Shopping Cart</h1>
            <button onClick={()=>navigate('/create')}>Create Product</button>
			<hr />
			<h3>Products</h3>
            {products.map((item, index) => (
                <div>
                    <div>{item.name} - ${item.price} {item.quantity >= 2 ? 'x' : ''} {item.quantity > 0 ? item.quantity : ''}</div>
                    {item.quantity > 0 ? (<button onClick={()=>handleAddCart(index)}>Add to cart</button>) : (<button disabled>Sold out</button>)}
                </div>
            ))}
			<hr />
			<h3>Your Cart</h3>
            <p>Total: $ { }</p>
			<button>Check Out</button>
		</div>
	);
};

export default Product;
