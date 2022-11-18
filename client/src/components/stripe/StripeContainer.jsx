import React from 'react';
import { loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from './CheckoutForm'

const PUBLIC_KEY = "pk_test_51M5DvUDSpiyoYlFqBDrfbdc5R0TvHWhW0sC5vL4NARG4i1if0ZV7qnpxXu5wDkZdzsD3xpakMKaxg4toEcMcQIE900X1oQJtCE";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
        <CheckoutForm />
    </Elements>
  )
}

export default Stripe;
