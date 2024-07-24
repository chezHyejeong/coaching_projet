import React from "react";
import "./CarCard.css";
import carImage from "./assets/images/gate_car1.png";

function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={carImage} alt="Hyundai Santafe" className="car-image" />
      <div className="car-info">
        <h2 className="car-name">{car.name}</h2>
        <p className="car-price">{car.price}</p>
        <p className="car-availability">A partir du {car.availableFrom}</p>
      </div>
    </div>
  );
}

export default CarCard;
