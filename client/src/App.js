import React from "react";
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import ItemsList from './components/ItemsList/ItemsList';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="container">
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/items' element={<ItemsList/>}/>
        </Routes>
    </div>
  );
}

export default App;
