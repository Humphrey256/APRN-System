const express = require('express');
const mongoose = require('mongoose');
const vehicleRoutes = require('./routes/vehicleRoutes'); // Ensure this is correct
const dbConnect = require('./config/db');
const cors = require('cors');
//const path = require('path'); // Import path module to work with file paths
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
dbConnect();
// Routes
app.use('/api/vehicles', vehicleRoutes); // This line should be correct if vehicleRoutes is a valid router

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
