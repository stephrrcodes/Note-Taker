// port system
const PORT = process.env.PORT || 3001;

// invoke express app
const app = express();

// dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

// set up url parsing, json data and static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//


//deploy to heroku
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});