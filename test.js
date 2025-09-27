const assert = require('assert');
const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    it('responds with welcome message', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /text/) 
            .expect('Welcome to the Clean Code Sample Project!', done);
    });
});
