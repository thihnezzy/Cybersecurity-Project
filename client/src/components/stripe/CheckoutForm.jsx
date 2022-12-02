import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState,useEffect } from 'react'
import authService from "../Auth/auth.service";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './index.css';
import { Button } from "react-bootstrap";
import { getLocalStorage } from "../../api/products";

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
    const location = useLocation();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [price,setPrice] = useState("");
    const [totalItems,setTotalItems] = useState(0);
    const [data, setData] = useState(!getLocalStorage() ? [] : getLocalStorage());
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        

        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:5000/payment", {
                    amount: price,
                    id
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true);
                    let totalItems = 0;
                let totalPrice = 0;
                for (let i = 0; i < data.length; i++){
                    totalItems += data[i].quantity;
                    totalPrice += data[i].quantity*data[i].price;
                }
                setPrice(totalPrice);
                setTotalItems(totalItems)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
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
                        <h2 className="price">Total: {price}$</h2>
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