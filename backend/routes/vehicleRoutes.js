// routes/vehicle.js
const express = require('express');
const router = express.Router();

// Example route (add your own routes here)
router.get('/', (req, res) => {
    res.send('Vehicles route');
});

// Export the router
module.exports = router;
