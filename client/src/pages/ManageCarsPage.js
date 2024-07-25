import React, { useState } from "react";
import Header from "../components/Header";
import "./ManageCarsPage.css";
import carImage from "../assets/images/gate_car1.png";

const carsData = [
  {
    id: 1,
    name: "Hyundai Santafe",
    image: carImage,
    reservationPeriod: "25/07 (10H00) - 31/07 (10H00)",
    status: "Réservée",
  },
  {
    id: 2,
    name: "Hyundai Santafe",
    image: carImage,
    reservationPeriod: "25/07 (10H00) - 31/07 (10H00)",
    status: "Indisponible",
  },
  {
    id: 3,
    name: "Hyundai Santafe",
    image: carImage,
    reservationPeriod: "25/07 (10H00) - 31/07 (10H00)",
    status: "Disponible",
  },
];

const ManageCarsPage = () => {
  const [cars, setCars] = useState(carsData);

  const handleDelete = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  const handleStatusChange = (id, status) => {
    setCars(cars.map((car) => (car.id === id ? { ...car, status } : car)));
  };

  return (
    <div className="manage-cars-page">
      <Header />
      <main className="manage-cars-content">
        <h2>Mes voitures</h2>
        <div className="add-car-button-container">
          <button className="add-car-button">
            <span className="add-icon">➕</span>
            <span className="add-car-text">Ajouter une voiture</span>
          </button>
        </div>
        <div className="cars-list">
          {cars.map((car) => (
            <div key={car.id} className="car-item">
              <img src={car.image} alt={car.name} className="car-image" />
              <div className="car-info">
                <h3>{car.name}</h3>
                <p>Période de réservation : {car.reservationPeriod}</p>
                <p className={`car-status ${car.status.toLowerCase()}`}>
                  {car.status}
                </p>
              </div>
              <div className="car-actions">
                <button className="edit-button">
                  ✏️
                  <div className="dropdown-content">
                    <a onClick={() => handleStatusChange(car.id, "Disponible")}>
                      Disponible
                    </a>
                    <a
                      onClick={() => handleStatusChange(car.id, "Indisponible")}
                    >
                      Indisponible
                    </a>
                  </div>
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(car.id)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ManageCarsPage;
