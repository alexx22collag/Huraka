import React, { useState } from 'react';
import ProductList from './Women';
import ShoppingCart from './Carrito';

function rtItems() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    return (
        <div>
            <ProductList addToCart={addToCart} />
            <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
    );
}

export default rtItems;