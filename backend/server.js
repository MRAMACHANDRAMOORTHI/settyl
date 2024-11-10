const express = require('express');
const connectDB = require('./config/db');  // This imports your db.js
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

// Connect to MongoDB
connectDB(); // This calls the function in db.js to connect to MongoDB

const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Set up the port, default to 5000 if not set in .env
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
