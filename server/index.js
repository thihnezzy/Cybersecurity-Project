import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';
import productsRoute from './routes/productsRoute.js';
import { createRequire } from 'module'
const require = createRequire(import.meta.url);
import authRoute from './routes/authRoute.js'
const app = express();
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")
//TODO:
/* This index.js contains the routes to pages
    - landing-page
    - items 
        - lists of categories
        => checkout 
            => shipping info 
    - login
    - register
    - contact form
    - review (comments, rating, ...)
    - */



//Later on, we create .env to store root and password
const CONNECTION_URL = 'mongodb+srv://root:root123@cluster0.lazlxio.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
            .then(() => app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`)))
            .catch( (error) => console.log(error));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
            
app.use('/products', productsRoute);
app.use('/users', userRoute);
app.use('/auth',authRoute);

app.post("/payment", async (req, res) => {
    let {amount, id} = req.body
    try{
        amount = Math.round(amount * 100)
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "",
            payment_method: id,
            confirm: true
        })
        res.status(200).json(       {
            message: "Payment Successfully",
            success: true
        });
    }catch (error){
        res.status(404).json({
            message: "Payment failed",
            success: false
        })
    }
})