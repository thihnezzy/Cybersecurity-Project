import React, {useState} from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';
import { removeItemLocalStorage } from '../../../api/products';
import { getLocalStorage, postLocalStorage } from '../../../api/products';
const CartItem = ({item}) => {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(item.quantity);
    const removeHandler = () =>{
        removeItemLocalStorage(item._id);
        window.location.reload();
    }
    const decreaseQuantity = () => {
        postLocalStorage(item,false);
        const data = getLocalStorage('products');
        setQuantity(data.find(p => p._id === item._id).quantity);
    }
    const increaseQuantity = () =>{
        postLocalStorage(item,true);
        const data = getLocalStorage('products');
        setQuantity(data.find(p => p._id === item._id).quantity);
    }
  return (<>
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={item.image} title={item.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>
                        {item.name}
                    </Typography>
                    <Typography variant="h6">
                        {item.price}$
                    </Typography>
                </div>
                <Typography  variant="body2" color="textSecondary">{item.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={decreaseQuantity}>-</Button>
                    <Typography>{quantity}</Typography>
                    <Button type="button" size="small" onClick={increaseQuantity}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={removeHandler}>Remove</Button>
            </CardActions>
        </Card>
    </>)
}

export default CartItem;
