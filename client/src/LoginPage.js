import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./LoginPage.css";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        console.log('Login successful');
        onLogin();
        navigate("/");
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
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
      </main>
    </div>
  );
}

export default LoginPage;