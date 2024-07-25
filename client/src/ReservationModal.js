import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fr } from "date-fns/locale";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import "./ReservationModal.css";

registerLocale("fr", fr);

Modal.setAppElement("#root");

const stripePromise = loadStripe("my-publishable-key");

const ReservationModal = ({ isOpen, onRequestClose, car }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [pickupLocation, setPickupLocation] = useState(car.lieuDePrise);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  const calculateTotalPrice = () => {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    const pricePerDay = parseFloat(car.price.replace("€", "").trim());

    return days * pricePerDay;
  };

  const handlePaymentSuccess = () => {
    setIsPaymentCompleted(true);
    alert(
      `Reservation for ${
        car.name
      } from ${startDate} to ${endDate} completed. Total price: ${calculateTotalPrice()}€. Pickup location: ${pickupLocation}`
    );
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="reservation-modal"
      overlayClassName="reservation-overlay"
    >
      <h2>Réserver {car.name}</h2>
      <div className="reservation-form">
        <label>
          Date de début:
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            locale="fr"
            className="date-picker"
            shouldCloseOnSelect={true}
          />
        </label>
        <label>
          Date de fin:
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            locale="fr"
            className="date-picker"
            shouldCloseOnSelect={true}
            minDate={startDate}
          />
        </label>
        <p>Prix total: {calculateTotalPrice()}€</p>
        <Elements stripe={stripePromise}>
          <PaymentForm
            totalPrice={calculateTotalPrice()}
            onPaymentSuccess={handlePaymentSuccess}
          />
        </Elements>
        <button onClick={onRequestClose}>Annuler</button>
      </div>
    </Modal>
  );
};

export default ReservationModal;
