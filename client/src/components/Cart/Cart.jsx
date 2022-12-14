import React,{useState, useEffect}  from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core';
import {Link, useNavigate} from 'react-router-dom';


import useStyles from './styles';
import { getLocalStorage } from '../../api/products';
import CartItem from './CartItem/CartItem';


const Cart = () => {
    const classes= useStyles();
    const [data, setData] =  useState(!getLocalStorage() ? [] : getLocalStorage());
    const [price,setPrice] = useState(0);
    const navigate = useNavigate();
    const toAddress = () =>{
        navigate('/address', {state:{data}});
    }
    useEffect(()=>{
        const fetchData = () =>{
            const data = getLocalStorage('products');
            if (data){
                setData(data);
            }       
        }
        console.log(data);
        fetchData();
        handlerPriceChange();        
    },[]);

    const handlerPriceChange = () =>{
        let totalPrice = 0;
        data.forEach(item => {
            totalPrice +=item.quantity* item.price;})
        setPrice(totalPrice);
    }
    const handleEmptyCart = () =>{
        localStorage.removeItem('products');
        window.location.reload();
    }
    const EmptyCart = () => (
        <Typography variant1="subtitle1"> You have no items in your shopping cart 
            <Link to="/" className={classes.link}>, start adding some</Link>
        </Typography>
    );
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {data.map((item,index) => (
                    <Grid item xs={12} sm={4} md={3} key={item._id}>
                       <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Total: {price.toFixed(2)}$
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    {/* <Button component={Link} to="/stripe" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button> */}
                    <Button onClick={toAddress} className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );
    

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!data ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
};

export default Cart;