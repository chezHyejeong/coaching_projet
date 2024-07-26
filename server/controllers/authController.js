// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');

const SECRET_KEY = 'secret';

exports.signup = async (req, res) => {
	const { username, email, password } = req.body;

	db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
		if (err) return res.status(500).json({ message: 'Internal server error' });
		if (user) return res.status(400).json({ message: 'Username already exists' });

		const hashedPassword = await bcrypt.hash(password, 10);
		db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err) => {
			if (err) return res.status(500).json({ message: 'Internal server error' });
			res.status(201).json({ message: 'User created successfully' });
		});
	});
};

exports.login = async (req, res) => {
	const { username, password } = req.body;

	db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
		if (err) return res.status(500).json({ message: 'Internal server error' });
		if (!user || !await bcrypt.compare(password, user.password)) {
			return res.status(401).json({ message: 'Invalid username or password' });
		}

		const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
		res.status(200).json({ token });
	});
};

exports.authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) return res.sendStatus(401);

	jwt.verify(token, SECRET_KEY, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
};
