require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

const models = require('./models/models.js');
const mainRouter = require('./routes/index.js');

app.use(express.json());
app.use(cors());
app.use('/api', mainRouter);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Working' })
})

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



