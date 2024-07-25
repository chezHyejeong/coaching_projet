import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import authService from "./services/authService";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLoginClick = async () => {
    try {
      await authService.login(username, password);
      onLogin();
      navigate("/");
    } catch (error) {
      setMessage("Login failed");
    }
  };

  return (
    <div className="login-page">
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
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Connexion
          </button>
        </form>
        {message && <p className="error-message">{message}</p>}
      </main>
    </div>
  );
}

export default LoginPage;