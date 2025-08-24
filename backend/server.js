const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// Configuring .env file
dotenv.config();

// Creating an instance of express
const app = express();

// Middleware to handle CORS
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }) 
);

// Connecting the Database
connectDB();

// Middleware to parse JSON content
app.use(express.json());

// Routes

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});