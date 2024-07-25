import React from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/images/locacar_logo.png";
import "./Header.css";

function Header({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleInscriptionClick = () => {
    navigate("/inscription");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleConnexionClick = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <img
        src={logoImage}
        alt="LocaCar Logo"
        onClick={handleLogoClick}
        className="logo-image"
      />
      <input type="text" className="search-bar" placeholder=" Recherche" />
      <div className="icons">
        {isLoggedIn ? (
          <div className="buttons">
            <button className="logout-button" onClick={onLogout}>
              Déconnexion
            </button>
            <div className="user-icon">👤</div>
          </div>
        ) : (
          <div className="buttons">
            <button className="login-button" onClick={handleConnexionClick}>
              Connexion
            </button>
            <button className="signup-button" onClick={handleInscriptionClick}>
              Inscription
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
