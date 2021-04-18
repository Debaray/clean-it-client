import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeMVQLbM1tSqs3toIHDDXT0h6tPjnlADuyM1iIvCF1Dp0N1ueK704jpp9mfaf3ZcwIGv21ZAn5eVwi4j2R1T52P00jQytvE5T');
const ProcessPayment = ({handlePaymentSuccess,bookServiceData}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm bookServiceData={bookServiceData} handlePayment= {handlePaymentSuccess}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;