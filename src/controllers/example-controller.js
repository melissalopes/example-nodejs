const { StatusCodes } = require('http-status-codes');

class ExampleController {
    async get(req, res) {
        try {
            res.status(StatusCodes.OK).json('Deu bom!');
        } catch (error) {
            console.error('Deu ruim!', error);
            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }
}

module.exports = ExampleController;
