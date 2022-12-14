import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { postLocalStorage } from '../../../api/products';



const Product = ({product}) => {
    const classes = useStyles();
    const addToCart = () =>{
        let products = {
            _id: product._id,
            name: product.name,
            price: product.price,
            image: product.image[0],
            description: product.description,
            quantity: 1
        }
        postLocalStorage(products);
        window.location.reload();
    }
    return (
        <Card className={classes.root}>
            <Link to={`/products/${product._id}`}>
            <CardMedia className={classes.media} image={product.image[0]} title={product.name} />
            </Link>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h6">
                        {product.price}$
                    </Typography>
                </div>
                <Typography  variant="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to cart" onClick={addToCart}> 
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
