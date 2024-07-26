// config/db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'coach_project.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
	if (err) {
		console.error('Erreur de connexion à la base de données SQLite:', err.message);
		throw err;
	}
	console.log('Connecté à la base de données SQLite.');
});

module.exports = db;
