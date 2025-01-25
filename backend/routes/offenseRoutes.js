const express = require('express');
const router = express.Router();
const offenseController = require('../controllers/offenses');

// Add offense to a vehicle
router.post('/add', offenseController.addOffense);

// Get offenses for a vehicle
router.get('/:plateNumber', offenseController.getOffenses);

// Delete an offense from a vehicle
router.delete('/delete', offenseController.deleteOffense);

// Export the router
module.exports = router;