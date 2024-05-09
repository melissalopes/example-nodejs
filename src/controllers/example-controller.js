const { StatusCodes } = require('http-status-codes');
const log = require('./../utils/logger-util');

class ExampleController {
    async get(req, res) {
        try {
            log.info('Init Example Controller');
            res.status(StatusCodes.OK).json({ message: 'Deu bom!' });
        } catch (error) {
            log.error('Could not init Example Controller', error);
            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Deu ruim!',
            });
        }
    }
}

module.exports = ExampleController;
