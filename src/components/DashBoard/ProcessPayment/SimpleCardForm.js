import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from 'react-bootstrap/Button';
const SimpleCardForm = ({ handlePayment ,bookServiceData}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod.id);
      console.log('[PaymentMethod]', paymentMethod);
      cardElement.clear();
    }
  };

  return (
    <div>
      <div className="row">
        <form className="col-lg-6" onSubmit={handleSubmit}>
          <CardElement />
          <Button variant="primary" as="input" type="submit" disabled={!stripe} value="Pay with Stripe" className="pt-2 pb-2 mt-3" block />
        </form>
      </div>
      {
        paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
      }
      {
        paymentSuccess && <p style={{ color: 'green' }}>Thank you for the payment. Your payment was successfully</p>
      }
    </div>
  );
};

export default SimpleCardForm;