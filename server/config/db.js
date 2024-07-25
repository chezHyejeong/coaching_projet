const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'pwd',
	database: 'coach_project'
});

connection.connect((err) => {
	if (err) {
		console.error('Erreur de connexion à la base de données:', err.stack);
		return;
	}
	console.log('Connecté à la base de données MySQL.');
});

module.exports = connection;
