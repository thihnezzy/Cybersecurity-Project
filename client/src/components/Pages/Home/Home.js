import React from 'react';
import { useState,useEffect } from 'react';
import nike from '../../../images/nike.PNG';
import classes from './Home.module.css';
import { Container, Image } from 'react-bootstrap';
import { useHistory, useNavigate } from 'react-router-dom';
import Wrapper from '../../Helpers/Wrapper';
import axios from 'axios';
import background from '../../../images/background.jpg';
const Home = () => {
    const navigate = useNavigate();
    
    return (
        <Wrapper>
        <Container className={classes['hero']}>
            <Image src={background} className={classes.background}/>
            <div className={`${classes["content-holder"]}`}>
                <h5 className="card-title display-3 fw-bolder mb-0 text-center">NEW ARRIVALS</h5>
                <p className="card-text lead fs-2 fw-bolder">CHECK OUT THE TRENDS</p>
            </div>
        </Container>
        </Wrapper>
    );

}

export default Home;