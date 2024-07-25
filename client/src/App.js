import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import InscriptionPage from "./InscriptionPage";
import CarDetailsPage from "./CarDetailsPage";
import carImage from "./assets/images/gate_car1.png";
import ProfilePage from "./ProfilePage";
import ManageCarsPage from "./ManageCarsPage";
import authService from "./services/authService";
import Header from "./Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
  };

  const carData = Array.from({ length: 24 }, (v, i) => ({
    id: i + 1,
    name: "Hyundai Santafe",
    price: "201 €",
    lieuDePrise: "12 rue de caumartin, 75009 Paris",
    availableFrom: "26/07",
    description: `Description text for car ${i + 1}`,
    image: carImage,
  }));

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
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