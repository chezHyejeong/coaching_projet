import axios from "axios";

const API_URL = "http://localhost:5000/auth";

// Fonction pour se connecter
const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Fonction pour s'inscrire
const signup = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/signup`, {
    username,
    email,
    password,
  });
  if (response.status === 201) {
    // Auto-login après inscription réussie
    return login(username, password);
  }
  throw new Error("Signup failed");
};

// Fonction pour se déconnecter
const logout = () => {
  localStorage.removeItem("user");
};

// Fonction pour obtenir l'utilisateur courant
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// Fonction pour obtenir les headers d'authentification
const authHeader = () => {
  const user = getCurrentUser();
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
};

export default {
  login,
  signup,
  logout,
  getCurrentUser,
  authHeader,
};
