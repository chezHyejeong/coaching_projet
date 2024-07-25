import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./PaymentForm.css";

const PaymentForm = ({ totalPrice, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      // Here we treat the payment
      onPaymentSuccess();
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <CardElement />
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      <button type="submit" disabled={processing || !stripe}>
        {processing ? "Processing..." : `Pay ${totalPrice}€`}
      </button>
    </form>
  );
};

export default PaymentForm;
