import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import "./InscriptionPage.css";

function InscriptionPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignupClick = async () => {
    try {
      await signup(username, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  };

  return (
    <div className="inscription-page">
      <main className="signup-form">
        <h2>Inscription</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignupClick();
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
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Inscription
          </button>
        </form>
      </main>
    </div>
  );
}

export default InscriptionPage;
