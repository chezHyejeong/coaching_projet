import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext"; // Importer le hook pour accéder à `logout`
import "./ProfilePage.css";
import carImage from "../assets/images/gate_car1.png";

function ProfilePage() {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Utiliser le hook pour obtenir la fonction `logout`

  const handleManageCarsClick = () => {
    navigate("/manage-cars");
  };

  const handleViewAllReservationsClick = (event) => {
    event.preventDefault();
    navigate("/view-all-reservations");
  };

  const handleLogoutClick = () => {
    logout(); // Appeler la fonction `logout` du contexte
    navigate("/"); // Rediriger vers la page d'accueil ou une autre page après la déconnexion
  };

  return (
    <div className="profile-page">
      <main className="profile-content">
        <div className="profile-info">
          <h2>Infos personnelles</h2>
          <p>
            <strong>Nom:</strong> IM
          </p>
          <p>
            <strong>Prénom:</strong> Hyejeong
          </p>
          <p>
            <strong>Email:</strong> hjl0311@gmail.com
          </p>
        </div>
        <div className="profile-cars">
          <h2>Mes voitures</h2>
          <div className="car-card">
            <img src={carImage} alt="Hyundai Santafe" />
            <div className="car-info">
              <h3>Hyundai Santafe</h3>
              <p>Réservée entre 08/08 - 15/08</p>
            </div>
          </div>
          <a href="/manage-cars" onClick={handleManageCarsClick}>
            Gérer mes voitures →
          </a>
        </div>
        <div className="profile-reservations">
          <h2>Mes réservations</h2>
          <div className="reservation-card">
            <img src={carImage} alt="Hyundai Santafe" />
            <div className="reservation-info">
              <h3>Hyundai Santafe</h3>
              <p>Période de réservation: 25/07 (10H00) - 31/07 (10H00)</p>
            </div>
          </div>
          <div className="reservation-card">
            <img src={carImage} alt="Hyundai Santafe" />
            <div className="reservation-info">
              <h3>Hyundai Santafe</h3>
              <p>Période de réservation: 25/07 (10H00) - 31/07 (10H00)</p>
            </div>
          </div>
          <a
            href="/view-all-reservations"
            onClick={handleViewAllReservationsClick}
          >
            Voir toutes mes réservations →
          </a>
        </div>
        <div className="logout-button-container">
          <button className="logout-button" onClick={handleLogoutClick}>
            Déconnexion
          </button>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
