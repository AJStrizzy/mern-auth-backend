// Imports
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const PORT = process.env.PORT || 8000;

const models = require('./models/index')

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message: 'Smile you are being watched by the Backend Engineering Team'});
});

app.listen(PORT, () => {
    console.log(`You are jamming to the sounds 🎧 on port: ${PORT}`);
});


