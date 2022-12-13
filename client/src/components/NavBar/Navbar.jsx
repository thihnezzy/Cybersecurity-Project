import React from 'react';
import { ShoppingCart } from '@material-ui/icons';
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {Form ,Button} from 'react-bootstrap';
import useStyles from './styles';
import logo from '../../images/logo-sport.PNG';
import { useEffect,useState } from 'react';
import authService from '../Auth/auth.service';
import jwt_decode from 'jwt-decode';
import { getScore } from '../../api/users';
import axios from 'axios';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    const [score, setScore] = useState(0);
    const navigate = useNavigate();
    let productsData;
    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const res = await axios.get(`http://localhost:5000/products/search/${searchTerm}`);
        console.log(res);
    }  
    const [searchTerm, setSearchTerm] = useState('');
 
    const [currentUser, setCurrentUser] = useState(undefined);
    const onChangeHandler = (e) =>{
        setSearchTerm(e.target.value);
    }
  useEffect(() => {
    const user = authService.getCurrentUser();
    let decodedJwt;
    
    if (localStorage.getItem('products') === null) {
        productsData = [];
    }else{
        productsData = JSON.parse(localStorage.getItem('products'));
    }
    
    if (user) {
        setCurrentUser(user);
    }
    if (user) {
        decodedJwt = jwt_decode(user);
        if (decodedJwt.exp * 1000 < Date.now()) {
            logoutHandler();
        }
    }
    const getScoree = async (decodedJwt) =>{
        try {
            const result = await getScore(decodedJwt.id);
            return result;
        } catch (error) {
            
        }}
    getScoree(decodedJwt)
        .then(result => {
            setScore(result.data.score)
        }
            
            )
        .catch(err => console.log(err));
  }, []);
    
    const logoutHandler = (e) =>{
        localStorage.removeItem('token');
        console.log("logout");
        window.location.reload();
    }

    const [ formData, setFormData ] = useState({
        searchTerm: '',
    });
    const searchHandler = (e)=>{
        navigate('/search?input='+formData.searchTerm,{replace: true});

        /*axios.post(API_URL + "search", {
            searchTerm
          })
          .then((response) => {
              console.log(response);
      
            return response.data;
          });*/
    }
    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }

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
                                        <Link to="/products" className="nav-link">Homme</Link>
                                        {/* <a className="nav-link" href="#">Femme</a> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/products" className="nav-link">Femme</Link>
                                        {/* <a className="nav-link" href="#">Enfant</a> */}
                                    </li>
                                </ul>

                                <div className="buttons">
                                    <Form className="d-flex">
                                        <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        onChange={handleChange}
                                        name='searchTerm'
                                        
                                        />
                                        <Button onClick={searchHandler} variant="outline-success" type='submit'><i className="fa fa-search" aria-hidden="true"></i></Button>
                                        {!currentUser && <a href="/login" className='btn btn-outline-white ms-2'>
                                        <i className='fa fa-user-plus me-1'> </i>
                                        </a>}
                                        
                                    </Form>

                                </div>
                                {(location.pathname === '/'|| location.pathname === '/cart'|| location.pathname.includes('/products')) && (
                                    <div className={classes.button}>
                                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                            <Badge badgeContent={totalItems} color="secondary" overlap='rectangular'>
                                                <ShoppingCart />
                                            </Badge>
                                        </IconButton>
                                    </div>
                                )}
                                {currentUser && <>
                                    
                                <Button onClick={logoutHandler}>Logout</Button>
                                {score && <div className='px-4'>Score: {score.toFixed(0)}</div>}
                                
                                </>}
                            </div>
                        </div>
                    </nav>
                </Toolbar>

            </AppBar>
        </div>
    );
}

export default Navbar;