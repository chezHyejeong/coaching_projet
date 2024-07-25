import React from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "./CarCard";
import "./App.css";

function MainPage({ isLoggedIn, cars = [] }) {
  const navigate = useNavigate();

  return (
    <div>
      <main className="car-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </main>
    </div>
  );
}

export default MainPage;
