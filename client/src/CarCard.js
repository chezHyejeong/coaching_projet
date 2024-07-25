import React from "react";
import { Link } from "react-router-dom";
import "./CarCard.css";
import carImage from "./assets/images/gate_car1.png";

function CarCard({ car }) {
  return (
    <div className="car-card">
      <Link to={`/car/${car.id}`} className="car-image-link">
        <img src={carImage} alt={car.name} className="car-image-link" />
      </Link>
      <div className="car-info">
        <h2 className="car-name">{car.name}</h2>
        <p className="car-price">{car.price}</p>
        <p className="car-availability">A partir du {car.availableFrom}</p>
        <p className="car-lieu">Lieu de prise: {car.lieuDePrise}</p>
      </div>
    </div>
  );
}

export default CarCard;
