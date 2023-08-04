require('dotenv').config();

const express = require('express');
const app = express();

const db = require('./db.js');

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await db.authenticate();
        await db.sync();
        app.listen(PORT, () => {
            console.log('Server is running on port: ', PORT);
        });        
    } catch (error) {
        
    }
}

start();



