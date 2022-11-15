import React from 'react';
import ReactDOM from 'react-dom/client';

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import App from './App';
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductListing from "./components/ProductListing/ProductListing";
import AddNewProduct from './components/Pages/AddNewProduct/AddNewProduct';
import ErrorPage from "./components/Pages/Error/ErrorPage";
import Profile from './components/Pages/Profile/Profile';
import Register from './components/Pages/Register/Register';


 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
  <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/cart' element={<App/>}/>
          <Route path='/checkout' element={<App/>}/>
          <Route path='/new' element={<AddNewProduct/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/products' element={<ProductListing/>}/>
          <Route path='/products/:id' element={<ProductDetail/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<ErrorPage/>}>

          </Route>
</Routes>
</BrowserRouter>); 

// root.render(<App/>);