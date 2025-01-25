const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

// User registration
router.post('/register', userController.register);

// User login
router.post('/login', userController.login);

// Get user profile
router.get('/profile', userController.getProfile);

// Export the router
module.exports = router;