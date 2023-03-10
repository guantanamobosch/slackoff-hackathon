require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.MONGO_DB_URI;

mongoose.connect(connectionString);

// mongoDB connection on success
mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected... <3`)
})

// mongoDB connection on error
mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error </3', error)
})

// disconnecting from mongoDB
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected </3')
})