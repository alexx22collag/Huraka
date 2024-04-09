import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

function App() {
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

export default App; rtItems;