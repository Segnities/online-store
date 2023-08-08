require('dotenv').config();

const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

const models = require('./models/models.js');
const mainRouter = require('./routes/index.js');

const errorMiddleware = require('./middleware/ErrorHanldingMiddleware.js');

app.use(express.json());
app.use(fileUpload({}));
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'static')));


app.use('/api', mainRouter);
app.use(errorMiddleware);

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



