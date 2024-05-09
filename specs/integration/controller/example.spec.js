/* eslint-disable no-undef */
const { StatusCodes } = require('http-status-codes');
const supertest = require('supertest');
const app = require('./../../../src/routes/app');

const initServer = supertest(app);

// ! Implementing tests with Jest and Supestest
describe('User integration tests', () => {
    it('Should return correct OK message and status code', async () => {
        const response = await initServer.get(`/api/examples`);

        expect(response.statusCode).toEqual(StatusCodes.OK);
        expect(response.body.message).toEqual('Deu bom!');
    });
});
