// models/User.js
const mongoose = require('mongoose');

// Define the user schema for a specific collection
const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    password: String, // Password will be hashed
    userid: { type: String, unique: true }
});

// Use mongoose's model method to create the model
const User = mongoose.models.User || mongoose.model('User', userSchema, 'users');

module.exports = User;
