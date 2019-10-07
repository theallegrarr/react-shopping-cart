import React, { useContext } from 'react';
import CartContext from '../contexts/cartContext';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const context = useContext(CartContext);

	const getCartTotal = () => {
		return context.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{context.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
