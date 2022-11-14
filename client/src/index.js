import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '/font-awesome/css/font-awesome.min.css';

import App from './App';
import {Routes, Route} from 'react-router-dom';
import ProductDetail from "./ProductDetail/ProductDetail";
import ProductListing from "./components/ProductListing/ProductListing";
import AddNewProduct from './components/Pages/AddNewProduct/AddNewProduct';
import ErrorPage from "./components/Pages/Error/ErrorPage";
import Profile from './components/Pages/Profile/Profile';
import Register from './components/Pages/Register/Register';
// const store = createStore(reducers, compose(applyMiddleware(thunk)));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);
ReactDOM.render(<BrowserRouter>
  <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/products' element={<ProductListing/>}/>
          <Route path='/products/:id' element={<ProductDetail/>}/>
          <Route path='/new' element={<AddNewProduct/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<ErrorPage/>}>
          </Route>
        </Routes>
</BrowserRouter>, document.getElementById('root'));
