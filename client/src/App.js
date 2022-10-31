import React from "react";
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import ItemsList from './components/ItemsList/ItemsList';
import NavBar from './components/NavBar/NavBar';
import ProductDetail from "./components/ProductDetail/ProductDetail";
function App() {
  return (
    <div className="container">
      <NavBar/>
        {/* <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/items' element={<ItemsList/>}/>
        </Routes> */}
        <ProductDetail/>
    </div>
  );
}

export default App;
