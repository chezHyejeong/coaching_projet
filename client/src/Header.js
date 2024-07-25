import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ isLoggedIn, onConnexionClick, onLogout }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleInscriptionClick = () => {
    navigate("/inscription");
  };

  return (
    <header className="header">
      <div
        className="logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
        LocaCar
      </div>
      <input type="text" className="search-bar" placeholder="Search..." />
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
            <button className="login-button" onClick={onConnexionClick}>
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