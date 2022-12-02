import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import { commerce } from './components/lib/commerce';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ProductListing from './components/ProductListing/ProductListing';
import {getProductsNumber} from './api/products';
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [total,setTotal] = useState(0);

  useEffect(() => {

    setTotal(getProductsNumber());
  }, []);
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(undefined);

  
  return (
    <>
    {location.pathname === '/' && <>
    <Navbar totalItems={total}/>
    <Home/>
    <Products products={products}/>
    {/* <ProductListing/> */}
    <div className="video ">
        <iframe src="https://www.youtube.com/embed/2COSkxxOtXY" allow='autoplay'></iframe>
    </div>
    <Footer/></>}

    {location.pathname  === '/cart' && <>
          <Navbar totalItems={total}/>
           <Cart/>
            </>
    } 
    </>
  );
}



export default App; 
