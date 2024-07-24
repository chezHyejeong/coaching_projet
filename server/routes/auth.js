const express = require('express');
const router = express.Router();

// Mock user data (in a real application, use a database)
let users = [
	{ username: 'admin', password: 'password' },
	{ username: 'user', password: '1234' },
];

// Signup endpoint
router.post('/signup', (req, res) => {
	const { username, email, password } = req.body;
	const existingUser = users.find(user => user.username === username);
	if (existingUser) {
		return res.status(400).json({ message: 'Username already exists' });
	}
	users.push({ username, email, password });
	res.status(201).json({ message: 'User created successfully' });
});

// Login endpoint
router.post('/login', (req, res) => {
	const { username, password } = req.body;
	const user = users.find(u => u.username === username && u.password === password);
	if (user) {
		res.status(200).json({ message: 'Login successful' });
	} else {
		res.status(401).json({ message: 'Invalid username or password' });
	}
});

module.exports = router;
