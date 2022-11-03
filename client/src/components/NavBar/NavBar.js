import React from "react";

import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () =>{
    return (
        <nav>
            <Link to='/' className="link">Home</Link>
            <Link to='/products' className="link">Items List</Link>
            <Link to='/new' className="link">Add new product</Link>
        </nav>
    );
}

export default NavBar;