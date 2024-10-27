const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); 
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const uri = 'mongodb+srv://Hariepriya_19:Ksop0jmPO5TmeTO3@cluster0.vhbvh.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error: ', err));

// Define the user schema for a specific collection
const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    password: String, // Password will be hashed
    userid: { type: String, unique: true }
});


const waterFlowSchema = new mongoose.Schema({
    flowRate: Number,
    totalFlow: Number,
    timestamp: { type: Date, default: Date.now }
}, { collection: 'sensordata' });
const WaterFlow = mongoose.model('WaterFlow', waterFlowSchema);



// Create a model for the 'users' collection
//const User = mongoose.model('User', userSchema, 'users');
const User = require('./models/User'); // Ensure this is correct

// Generate unique user ID
const generateUserId = () => {
    return 'user_' + Math.random().toString(36).substr(2, 9);
};

// POST route to handle signup
app.post('/signup', async (req, res) => {
    const { name, phone, email, address, password } = req.body;

    console.log('Request received with data:', req.body); // Log the request data

    // Hash the password before saving
    //const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        phone,
        email,
        address,
        password, // Save the hashed password
        userid: generateUserId()
    });

    try {
        await newUser.save();
        res.status(201).send('User added successfully');
    } catch (error) {
        console.error('Error saving user:', error); // Log any error
        res.status(500).send('Error adding user: ' + error);
    }
});

app.get('/api/water-distribution', async (req, res) => {
    try {
        const latestData = await WaterFlow.findOne().sort({ _id: -1 }); // Get the latest record using _id
        if (latestData) {
            res.json(latestData);
        } else {
            res.status(404).json({ message: 'No water distribution data found' });
        }
    } catch (error) {
        console.error('Error fetching water distribution data:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});



// Use user routes under the /api prefix
app.use('/api', userRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
