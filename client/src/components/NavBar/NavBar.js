import React from "react";

import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () =>{
    return (
        <nav>
            <Link to='/' className="link">Home</Link>
            <Link to='/products' className="link">Items List</Link>
        </nav>
    );
}

export default NavBar;