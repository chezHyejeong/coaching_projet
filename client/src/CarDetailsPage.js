import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import ReservationModal from "./ReservationModal";
import "./CarDetailsPage.css";

function CarDetailsPage({ cars }) {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));
  const [modalIsOpen, setModalIsOpen] = useState(false);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="car-details-page">
      <Header />
      <main className="car-details">
        <h1>{car.name}</h1>
        <div className="car-details-content">
          <img src={car.image} alt={car.name} className="car-image" />
          <div className="car-description">
            <h2>Annonce {car.id}</h2>
            <p>Description:</p>
            <p>{car.description}</p>
            <p>
              <strong>Prix:</strong> {car.price}
            </p>
            <p>Lieu de prise:</p>
            <p>{car.lieuDePrise}</p>
            <button
              className="reserve-button"
              onClick={() => setModalIsOpen(true)}
            >
              Réserver
            </button>
          </div>
        </div>
      </main>
      <ReservationModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        car={car}
      />
    </div>
  );
}

export default CarDetailsPage;
