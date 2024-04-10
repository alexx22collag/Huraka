import React, { useState } from 'react';
import ProductList from './Women';
import ShoppingCart from './Carrito';

function cartItems() {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (product) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = { ...prevCartItems };
            if (updatedCartItems[product.id]) {
                updatedCartItems[product.id] += 1;
            } else {
                updatedCartItems[product.id] = 1;
            }
            return updatedCartItems;
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = { ...prevCartItems };
            delete updatedCartItems[productId];
            return updatedCartItems;
        });
    };

    return (
        <div>
            <ProductList addToCart={addToCart} />
            <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
    );
}

export default cartItems;