import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import InscriptionPage from "./InscriptionPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/inscription" element={<InscriptionPage />} />
          <Route path="/" element={<MainPage isLoggedIn={isLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
