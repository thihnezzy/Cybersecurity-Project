import React from 'react';
import ReactDOM from 'react-dom/client';

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import App from './App';
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductListing from "./components/ProductListing/ProductListing";
import ErrorPage from "./components/Pages/Error/ErrorPage";
import Profile from './components/Pages/Profile/Profile';
import Register from './components/Pages/Register/Register';
// import Login from './components/Login/Login';
import Login from './components/Pages/Login/Login';
import StripeContainer from './components/stripe/StripeContainer';
import Script from './components/Script/script'
import Search from './components/search/search'
import Shipping from './components/Shipping/AddressForm'

 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
  <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/cart' element={<App/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/products' element={<ProductListing/>}/>
          <Route path='/products/:id' element={<ProductDetail/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/stripe' element={<StripeContainer/>} />
          <Route path='*' element={<ErrorPage/>} />
          <Route path='/Script' element={<Script />} />
          <Route path='/search' element={<Search />} />
          <Route path='/AddressForm' element={<Shipping />} />

</Routes>
</BrowserRouter>); 

// root.render(<App/>);