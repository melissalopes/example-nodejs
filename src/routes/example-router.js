const express = require('express');
const ExampleController = require('../controllers/example-controller');

const examplesRouter = express.Router();

const exampleController = new ExampleController();

examplesRouter.get(
    '/',
    async (req, res) => await exampleController.get(req, res)
);

module.exports = examplesRouter;
