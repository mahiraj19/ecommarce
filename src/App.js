import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import { FaShoppingCart } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = product => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = productId => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <div>
      <header>
        <h1>E-commerce Cart</h1>
        <FaShoppingCart size={30} />
        <span>{cart.length}</span>
      </header>
      <main>
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </main>
    </div>
  );
};

export default App;
