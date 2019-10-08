import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/productContext';
import CartContext from './contexts/cartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	const [localCart, updateCart] = useState([]);

	const getLocal = () => {
		const data = (localStorage.getItem('cart'));
	
		return data;
	}

	const addItem = item => {
		setCart([...cart, item]);
		updateCart([...localCart, item]);
	};

	const removeItem = item => {
		setCart(cart.filter(product => product.id !== item));
		updateCart(localCart.filter(product => product.id !== item));
	};

	return (
		<div className="App">
			{/* Routes */}
			<CartContext.Provider value={{ cart, removeItem }}>
				<Navigation />
				<Route path="/cart" component={ShoppingCart} />
			</CartContext.Provider>

			<ProductContext.Provider value={{ products, addItem }}>
				<Route exact path="/" component={Products} />
			</ProductContext.Provider>
		</div>
	);
}

export default App;
