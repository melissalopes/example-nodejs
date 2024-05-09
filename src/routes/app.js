require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const examplesRouter = require('./example-router');
const DatabaseConfig = require('../configs/dabatase');

(() => {
    app.use(express.json());

    app.use(
        cors({
            origin: 'http://localhost:3000',
            credentials: true,
            optionSuccessStatus: 200,
        })
    );

    const databaseConfig = new DatabaseConfig();
    databaseConfig.connect();

    app.use('/api/examples', examplesRouter);
})();

module.exports = app;
