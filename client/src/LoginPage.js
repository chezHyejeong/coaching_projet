import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    console.log("로그인 시도:", { username, password });
    onLogin();
    navigate("/");
  };

  return (
    <div className="login-page">
      <header className="header">
        <div className="logo">LocaCar</div>
        <div className="buttons">
          <button className="login-button" onClick={handleLoginClick}>
            Connexion
          </button>
          <button className="signup-button">Inscription</button>
        </div>
      </header>
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
            <label htmlFor="password">Mot de passe:</label>
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
      </main>
    </div>
  );
}

export default LoginPage;
