const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust the path as necessary
const router = express.Router();

// Login endpoint
router.post('/login', async (req, res) => {
    const { name, password } = req.body; // Change 'username' to 'name'

    try {
        const user = await User.findOne({ name }); // Find user by name
        if (!user) {
            return res.json({ success: false, message: 'Invalid name or password' });
        }

        // Compare the entered password with the password in the database
        if (password !== user.password) { // Directly compare without hashing
            return res.json({ success: false, message: 'Invalid name or password' });
        }

        return res.json({ success: true, message: 'Login successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

router.post('/payment', async (req, res) => {
    const { username, response } = req.body;

    console.log(`Received payment response from ${username}: ${response}`);
    
    if (response === 'yes') {
        // Logic for confirming payment (e.g., update database or trigger an action)
        console.log(`Payment confirmed for user ${username}`);
        // Optionally send a signal to your microcontroller here
    } else if (response === 'no') {
        // Logic for handling declined payment
        console.log(`Payment declined for user ${username}`);
        // Optionally send a signal to your microcontroller here
    }

    res.json({ success: true, message: 'Payment response received' });
});



module.exports = router; // Export the router
