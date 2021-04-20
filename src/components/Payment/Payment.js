import React from 'react';
import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('sk_test_51IiLH5DuxfvNjvUOW9hf5PB34AltJQ1zXoRBF22jSl5Wg4EdTLdQ9UF65A4gm5fOorEJBwOCxI0mL7Gl4vkIInK900XTag8zz3');

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
        <CardElement
            options={{
                style: {
                base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                    color: '#aab7c4',
                    },
                },
                invalid: {
                    color: '#9e2146',
                },
                },
            }}
        />
    </Elements>
  );
};

export default Payment;