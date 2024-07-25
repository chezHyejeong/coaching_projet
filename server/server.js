// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
