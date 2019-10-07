import React, { useContext } from 'react';
import CartContext from '../contexts/cartContext';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	const context = useContext(CartContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{context.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
