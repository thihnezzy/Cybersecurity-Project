import React from 'react';
import { ShoppingCart } from '@material-ui/icons';
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';
import logo from '../../images/logo-sport.PNG';
const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    return (

        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="" height="40px" className={classes.image} />
                    </Typography>
                    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/products" className="nav-link">Products</Link>
                                        {/* <a className="nav-link" href="#">Homme</a> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/products" className="nav-link">Products</Link>
                                        {/* <a className="nav-link" href="#">Femme</a> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/products" className="nav-link">Products</Link>
                                        {/* <a className="nav-link" href="#">Enfant</a> */}
                                    </li>
                                </ul>

                                <div className="buttons">
                                    <a href="" className='btn btn-outline-white'>
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </a>
                                    <a href="" className='btn btn-outline-white ms-2'>
                                        <i className='fa fa-user-plus me-1'> </i>
                                    </a>
                                </div>
                                {(location.pathname === '/' || location.pathname === '/products') && (
                                    <div className={classes.button}>
                                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                            <Badge badgeContent={totalItems} color="secondary">
                                                <ShoppingCart />
                                            </Badge>
                                        </IconButton>
                                    </div>
                                )}
                            </div>
                        </div>
                    </nav>
                </Toolbar>

            </AppBar>
        </div>
    );
}

export default Navbar;

