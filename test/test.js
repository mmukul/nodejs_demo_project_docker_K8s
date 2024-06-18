var request = require('supertest');
var app = require('../index.js');
describe('GET /will', function() {
    it('respond with hello students', function(done) {
        request(app).get('/will').expect('{ "response": "Hello Students" }', done);
    });
});