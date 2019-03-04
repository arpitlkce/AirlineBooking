const request = require('supertest');

/**
 * Testing get fetchBooking endpoint
 */
let server;
describe('Test All Routes', () => {
    beforeEach(() => {
        server = require('../server');
    });

    afterEach((done) => {
        delete require.cache[require.resolve('../server')];
        done();
    });
    it('respond with json containing fetchBooking', function (done) {
        request(server)
            .get('/fetchBooking/2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('respond with json containing cancel booking ID', function (done) {
        request(server)
            .get('/fetchBooking/2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    describe('POST /bookFlight/', function () {
        let data = {};
        it('respond with json containing bookFlight', function (done) {
            request(server)
                .post('/bookFlight/')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
    describe('POST /login/', function () {
        let data = {};
        it('respond with json containing login', function (done) {
            request(server)
                .post('/login/')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
    describe('POST /login/', function () {
        let data = {};
        it('respond with json containing login', function (done) {
            request(server)
                .post('/login/')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
    describe('POST /fetchFlight/', function () {
        let data = {};
        it('respond with json containing fetchFlight', function (done) {
            request(server)
                .post('/fetchFlight/')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});
