const express = require('express');
const router = express.Router();
const statisticsController = require('../controllers/statistics');

// Get total number of offenses
router.get('/total-offenses', statisticsController.getTotalOffenses);

// Get offense trends
router.get('/offense-trends', statisticsController.getOffenseTrends);

// Get license plate detection accuracy
router.get('/detection-accuracy', statisticsController.getDetectionAccuracy);

// Export the router
module.exports = router;