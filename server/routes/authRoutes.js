const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Importer le contrôleur d'authentification

// Signup endpoint
router.post('/signup', authController.signup);

// Login endpoint
router.post('/login', authController.login);

module.exports = router;
