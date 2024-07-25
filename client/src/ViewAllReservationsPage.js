import React from "react";
import Header from "./components/Header";
import carImage from "./assets/images/gate_car1.png";
import "./ViewAllReservationsPage.css";

const reservationsData = [
  {
    id: 1,
    carName: "Hyundai Santafe",
    reservationPeriod: "25/07 (10H00) - 31/07 (10H00)",
    status: "En cours",
  },
  {
    id: 2,
    carName: "Hyundai Santafe",
    reservationPeriod: "25/07 (10H00) - 31/07 (10H00)",
    status: "Annulée",
  },
  {
    id: 3,
    carName: "Hyundai Santafe",
    reservationPeriod: "25/07 (10H00) - 31/07 (10H00)",
    status: "Terminée",
  },
];

const ViewAllReservationsPage = () => {
  return (
    <div className="view-all-reservations-page">
      <Header />
      <main className="reservations-content">
        <h2>Mes réservations</h2>
        <div className="reservations-list">
          {reservationsData.map((reservation) => (
            <div key={reservation.id} className="reservation-card">
              <img src={carImage} alt={reservation.carName} />
              <div className="reservation-info">
                <h3>{reservation.carName}</h3>
                <p>Période de réservation: {reservation.reservationPeriod}</p>
                <p
                  className={`reservation-status ${reservation.status.toLowerCase()}`}
                >
                  {reservation.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ViewAllReservationsPage;
