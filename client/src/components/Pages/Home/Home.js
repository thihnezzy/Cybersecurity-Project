import React from 'react';
import { useState,useEffect } from 'react';
import nike from '../../../images/nike.PNG';
import classes from './Home.module.css';
import { useHistory, useNavigate } from 'react-router-dom';
import Wrapper from '../../Helpers/Wrapper';
import axios from 'axios';
const Home = () => {
    const navigate = useNavigate();
    
    return (
        <Wrapper>
        <div className={classes['hero']}>
        <div className={`${classes.card} bg-dark text-white border-0`}>
            <img src={nike} className="card-img img-fluid img-thumbnail h-100" alt="..." width="100%" height="700px" position="relative"/>
            {/* <div className="card-img-overlay d-flex flex-column justify-content">
                <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0 text-center">NEW ARRIVALS</h5>
                <p className="card-text lead fs-2 fw-bolder">CHECK OUT THE TRENDS</p>
                </div>
            </div> */}
        </div>
        </div>
        </Wrapper>
    );

}

export default Home;