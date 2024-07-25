const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

const SECRET_KEY = 'your-secret-key';

// Exemple de stockage en mémoire des utilisateurs
let users = [
	{ username: 'admin', password: bcrypt.hashSync('password', 10) },
	{ username: 'user', password: bcrypt.hashSync('1234', 10) },
];

// Signup endpoint
router.post('/signup', async (req, res) => {
	const { username, email, password } = req.body;
	const existingUser = users.find(user => user.username === username);
	if (existingUser) {
		return res.status(400).json({ message: 'Username already exists' });
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	users.push({ username, email, password: hashedPassword });
	res.status(201).json({ message: 'User created successfully' });
});

// Login endpoint
router.post('/login', async (req, res) => {
	const { username, password } = req.body;

	const user = users.find(u => u.username === username);
	if (!user || !await bcrypt.compare(password, user.password)) {
		return res.status(401).json({ message: 'Invalid username or password' });
	}

	const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
	res.status(200).json({ token });
});

// Middleware to check JWT
const authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) return res.sendStatus(401);

	jwt.verify(token, SECRET_KEY, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
};

module.exports = { router, authenticateToken };