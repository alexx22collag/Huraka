
import React, { useState } from 'react';
import Women from './Women';
import ShoppingCart from './Carrito';

function CartItems() {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (product) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = { ...prevCartItems };
            if (updatedCartItems[product.productId]) {
                updatedCartItems[product.productId] += 1;
            } else {
                updatedCartItems[product.productId] = 1;
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
            <Women addToCart={addToCart} />
            <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
    );
}

export default CartItems;