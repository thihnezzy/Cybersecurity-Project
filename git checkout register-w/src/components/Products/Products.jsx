import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';


const Products = ({products, onAddToCart}) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
        <div className="container my-5 py-4">
                <div className="row">
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>New Arrivals</h1> <hr />
                    </div>
                </div>
            </div>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                    <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>

        <div className="video ">
                    <iframe src="https://www.youtube.com/embed/2COSkxxOtXY"></iframe>
                </div>

    </main>
    );
    
}

export default Products;