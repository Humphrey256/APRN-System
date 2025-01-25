// routes/vehicle.js
const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicles');

// Add a new vehicle
router.post('/add', vehicleController.addVehicle);

// Update vehicle details
router.put('/update', vehicleController.updateVehicle);

// Delete a vehicle
router.delete('/delete', vehicleController.deleteVehicle);

// Export the router
module.exports = router;
