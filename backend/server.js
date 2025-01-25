const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const dbConnect = require('./config/db');
const vehicleRoutes = require('./routes/vehicleRoutes');
const offenseRoutes = require('./routes/offenseRoutes');
const userRoutes = require('./routes/userRoutes');
const statisticsRoutes = require('./routes/statisticsRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
dbConnect();

// Routes
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/offenses', offenseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/statistics', statisticsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
