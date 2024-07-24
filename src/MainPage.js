import React from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "./CarCard";
import Header from "./Header";

function MainPage({ isLoggedIn }) {
  const navigate = useNavigate();

  const handleConnexionClick = () => {
    navigate("/login");
  };

  const carData = Array.from({ length: 24 }, () => ({
    name: "Hyundai Santafe",
    price: "201 €",
    availableFrom: "26/07",
  }));

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onConnexionClick={handleConnexionClick} />
      <main className="car-grid">
        {carData.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </main>
    </div>
  );
}

export default MainPage;
