import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import InscriptionPage from "./InscriptionPage";
import CarDetailsPage from "./CarDetailsPage";
import carImage from "./assets/images/gate_car1.png";
import ProfilePage from "./ProfilePage";
import ManageCarsPage from "./ManageCarsPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const carData = Array.from({ length: 24 }, (v, i) => ({
    id: i + 1,
    name: "Hyundai Santafe",
    price: "201 €",
    availableFrom: "26/07",
    description: `Description text for car ${i + 1}`,
    image: carImage,
  }));

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/inscription" element={<InscriptionPage />} />
          <Route
            path="/"
            element={<MainPage isLoggedIn={isLoggedIn} cars={carData} />}
          />
          <Route path="/car/:id" element={<CarDetailsPage cars={carData} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/manage-cars" element={<ManageCarsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
