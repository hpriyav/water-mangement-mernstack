// controllers/userController.js
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust path as necessary

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.json({ success: false, message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: 'Invalid username or password' });
        }

        return res.json({ success: true, message: 'Login successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
