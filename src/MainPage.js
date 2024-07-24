import React from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "./CarCard";
import Header from "./Header";
import "./App.css";

function MainPage({ isLoggedIn, cars = [] }) {
  const navigate = useNavigate();

  const handleConnexionClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onConnexionClick={handleConnexionClick} />
      <main className="car-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </main>
    </div>
  );
}

export default MainPage;
