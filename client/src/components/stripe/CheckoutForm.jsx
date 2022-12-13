import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState,useEffect } from 'react'
import authService from "../Auth/auth.service";
import {  useNavigate } from "react-router-dom";
import './index.css';
import { getLocalStorage, removeAllItemsLocalStorage } from "../../api/products";
import jwt_decode from 'jwt-decode';
import { changeScore } from "../../api/users";
const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}


export function CheckoutForm(props) {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [price,setPrice] = useState(0);
    const [totalItems,setTotalItems] = useState(0);
    const [data, setData] = useState(!getLocalStorage() ? [] : getLocalStorage());
    const rate = (total) => {
        switch (true){
            case total >= 1000:
                return 0.4;
            case total >= 500:
                return 0.3
            case total >= 200:
                return 0.2
            case total >= 50:
                return 0.1
            case total >= 10:
                return 0.05
            default:
                return 0;
                
        }
    }
    const [currentUser,setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = authService.getCurrentUser();
        const products = getLocalStorage('products');
            if (products){
                setData(data);
                
            }
        if (user) {
          setCurrentUser(user);
        }
        if (!user){
            alert('You  will be redirect to login page');

            navigate('/login', {replace: true});
        }
      }, []);
    const calculateScore = (p) => {
        
        return p * rate(p);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        if (!error) {
            try {
                if (data){
                    let totalItems = 0;
                    let totalPrice = 0;
                        for (let i = 0; i < data.length; i++){
                            totalItems += data[i].quantity;
                            totalPrice += data[i].quantity*data[i].price;
                    }
                    setPrice(totalPrice);
                    setTotalItems(totalItems);
                    setSuccess(true);
                    const decodedJwt = jwt_decode(currentUser);
                    await changeScore(calculateScore(totalPrice), decodedJwt.id);
                    removeAllItemsLocalStorage();
                    alert('You will be redirect to homepage');
                    setTimeout(()=>{
                        navigate('/');
                    },5000)
                }
                // const { id } = paymentMethod
                // const response = await axios.post("http://172.30.150.117/api/payment", {
                //     amount: price,
                //     id
                // })

                // if (response.data.success) {
                //     console.log("Successful payment")
                //     setSuccess(true);
                //     const decodedJwt = jwt_decode(currentUser);
                //     const res = await changeScore(calculateScore(price), decodedJwt.id);
                    // removeAllItemsLocalStorage();
                    // alert('You will  be redirect to homepage');
                    // setTimeout(()=>{
                    //     navigate('/');

                    // },10000)
                // }
                

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }
    

    return (
        <>
        {currentUser && <div className="payment_with_stripe">
                <section>
                <h2 className="card-title display-4 fw-bolder mb-0 text-center "  >Purchase</h2>
                {!success ?
                    <form onSubmit={handleSubmit}>
                        <fieldset className="FormGroup">
                            <div className="FormRow">
                                <CardElement options={CARD_OPTIONS} />
                            </div>
                        </fieldset>
                        <button className="button">Pay</button>
                    </form>
                    :
                    <div>
                        <h2 className="total-items" key="">You just bought {totalItems} items in total</h2>
                        <h2 className="price">Total: {price.toFixed(2)}$</h2>
                    </div>
                }
                </section>
               
            </div>

}
        {!currentUser && <><h1>You need to login first</h1>
        
        </>}
        </>
    )
}