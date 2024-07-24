import React from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "./CarCard";

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
      <header className="header">
        <div className="logo">LocaCar</div>
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="icons">
          {isLoggedIn ? (
            <div className="user-icon">👤</div>
          ) : (
            <div className="buttons">
              <button className="login-button" onClick={handleConnexionClick}>
                Connexion
              </button>
              <button className="signup-button">Inscription</button>
            </div>
          )}
        </div>
      </header>
      <main className="car-grid">
        {carData.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </main>
    </div>
  );
}

export default MainPage;
