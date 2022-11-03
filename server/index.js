import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// import itemsRoute from './routes/items.js';
import userRoute from './routes/userRoute.js';


const app = express();

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

// Route for items listing (middleware)
// app.use('/items', itemsRoute);
app.use('/products', userRoute);



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//Later on, we create .env to store root and password
const CONNECTION_URL = 'mongodb+srv://root:root123@cluster0.lazlxio.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
            .then(() => app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`)))
            .catch( (error) => console.log(error));