const User = require('../controllers/models/user.js');

const config = require('../config/environment.json');
const request = require('supertest')(config.host);
const expect = require('chai').expect;
var faker = require('faker');


describe('Account API, Authorization Endpoint', () => {
    describe('Authorized User', () => {
        it('The default user should be authorized', async function () {
            const defaultUser = new User("ibrian93", "MyTesting83!");
            const response = await request.post('/Account/v1/Authorized')
                .send(defaultUser);
            expect(response.status).to.eql(200);
            expect(response.body).to.equal(true);
        });
    });
    describe('Non authorized User', () => {
        it('A user who has not generated a token should not be authorized', async function() {
            const randomUser = new User(faker.internet.email(), "MyTesting83!");
            const responseRegisterUser = await request.post('/Account/v1/User')
                .send(randomUser);
            expect(responseRegisterUser.status).to.eql(201);
            const response = await request.post('/Account/v1/Authorized')
                .send(randomUser);
            expect(response.status).to.eql(200);
            expect(response.body).to.equal(false);
        });
        it('A non existant user should not be authorized', async function() {
            const randomUser = new User(faker.internet.email(), "MyTesting83!");
            const response = await request.post('/Account/v1/Authorized')
                .send(randomUser);
            expect(response.status).to.eql(404);
            expect(response.body.code).to.eql('1207');
            expect(response.body.message).to.eql('User not found!');
        });
        it('No username provided', async function() {
            const response = await request.post('/Account/v1/Authorized')
                .send({password: "MyTesting83!"});
            expect(response.status).to.eql(400);
            expect(response.body.code).to.eql('1200');
            expect(response.body.message).to.eql('UserName and Password required.');
        });
        it('No password provided', async function() {
            const response = await request.post('/Account/v1/Authorized')
                .send({userName: "Testing"});
            expect(response.status).to.eql(400);
            expect(response.body.code).to.eql('1200');
            expect(response.body.message).to.eql('UserName and Password required.');
        });
    });
});