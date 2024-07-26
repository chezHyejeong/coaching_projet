import React, { createContext, useState, useContext, useEffect } from 'react';
import authService from '../services/authService';

// Créer le contexte
const AuthContext = createContext();

// Créer le provider
export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const user = authService.getCurrentUser();
		if (user) {
			setIsLoggedIn(true);
		}
	}, []);

	const login = async (username, password) => {
		try {
			await authService.login(username, password);
			setIsLoggedIn(true);
		} catch (error) {
			console.error("Login failed:", error.message);
		}
	};

	const signup = async (username, email, password) => {
		try {
			await authService.signup(username, email, password);
			setIsLoggedIn(true);
		} catch (error) {
			console.error("Signup failed:", error.message);
		}
	};

	const logout = () => {
		setIsLoggedIn(false);
		authService.logout(); // Assurez-vous que `logout` est implémenté dans votre service
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, login, signup, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

// Hook pour utiliser le contexte
export const useAuth = () => useContext(AuthContext);
