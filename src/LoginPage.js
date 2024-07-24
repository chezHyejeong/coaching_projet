import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./LoginPage.css";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onLogin();
    navigate("/");
  };

  const handleConnexionClick = () => {
    navigate("/login");
  };

  return (
    <div className="login-page">
      <Header onConnexionClick={handleConnexionClick} />
      <main className="login-form">
        <h2>Connexion</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLoginClick();
          }}
        >
          <div className="form-group">
            <label htmlFor="username">Identifiant :</label>
            <input type="text" id="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe :</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="submit-button">
            Connexion
          </button>
        </form>
      </main>
    </div>
  );
}

export default LoginPage;
