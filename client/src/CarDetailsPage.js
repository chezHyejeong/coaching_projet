import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function CarDetailsPage({ cars }) {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));

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
            <button className="reserve-button">Réserver</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CarDetailsPage;
