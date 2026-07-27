const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');

const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// middleware static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Define a simple user schema and model (you can customize this as needed)
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
});

// Create a User model
const User = mongoose.model('User', UserSchema);

// app.get('/users', (req, res) => {
//     // Fetch users from MongoDB (this is just a placeholder, implement your own logic)
//     res.json({ message: users });
// });

// Define a route to get users from MongoDB
app.get('/users', async (req, res) => {
    try { 
        const users = await User.find(); // Fetch all users from the database
        res.status(200).json(users); // Send the users as JSON response
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }});   








// get static pages
app.get('/', (req, res) => {
    res.send('index.html');
});

app.get('/about', (req, res) => {
    res.json({ message: 'This is the about page' });
});

app.get('/contact', (req, res) => {
    res.json({ message: 'This is the contact page' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});