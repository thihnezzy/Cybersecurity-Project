import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import { commerce } from './components/lib/commerce';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import Login from './components/Login/Login';
import ProductListing from "./components/ProductListing/ProductListing";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity});
    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty();
    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  const location = useLocation();
  return (
    <>
    {location.pathname === '/' && <>
    <Navbar totalItems={cart.total_items}/>
    <Home/><Products products={products} onAddToCart={handleAddToCart}/>
    <Footer/></>}

    {location.pathname  === '/cart' && <>
          <Navbar totalItems={cart.total_items}/>
           <Cart 
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            />
            </>
    } 
    {
      location.pathname === '/checkout' && <>
        <Checkout cart={cart} />
      </>
    }


{
      location.pathname === '/Login' && <>
        <Login />
      </>
    }
    </>
  );
}

export default App; 
