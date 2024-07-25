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
      // 여기에서 서버로 요청하여 결제를 처리해야 합니다.
      // 예를 들어, 서버로 paymentMethod.id와 금액을 전송하여 결제를 완료합니다.

      // 결제가 성공적으로 완료된 경우
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
