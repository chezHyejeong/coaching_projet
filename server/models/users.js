// models/user.js
const db = require('../config/db');

const createUserTable = () => {
	const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            status TEXT DEFAULT 'client'
        );
    `;

	db.run(sql, (err) => {
		if (err) {
			console.error('Erreur lors de la création de la table "users":', err.message);
			throw err;
		}
		console.log('Table "users" créée ou déjà existante.');
	});
};

module.exports = { createUserTable };
