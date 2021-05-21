const User = require('../controllers/models/user.js');

const config = require('../config/environment.json');
const request = require('supertest')(config.host);
const expect = require('chai').expect;
var faker = require('faker');


var accountEndpoint = "/Account/v1/User";

describe('Account API, User endpoint', () => {
    describe('User Registration Successful', () => {
        it('The user who meets the proper criterias, should be successfully register', async function() {
            let defaultUser = new User(faker.internet.email(), 'MyTesting83!');
            let response = await request.post(accountEndpoint)
                .send(defaultUser);
            expect(response.status).to.be.eql(201);
            expect(response.body.userID).to.not.be.undefined;
            expect(response.body.username).to.be.eql(defaultUser.userName);
        });
    });
    describe('User registration not successful', () => {
        it('The user with no username criteria should not be able to register', async function() {
            let user = new User(undefined, 'MyTesting83!');
            let response = await request.post(accountEndpoint)
                .send(user);
            expect(response.status).to.be.eql(400);
            expect(response.body.code).to.be.eql('1200');
            expect(response.body.message).to.be.eql('UserName and Password required.');
        });
        it('The user with no password criteria should not be able to register', async function() {
            let user = new User(faker.internet.email());
            let response = await request.post(accountEndpoint)
                .send(user);
            expect(response.status).to.be.eql(400);
            expect(response.body.code).to.be.eql('1200');
            expect(response.body.message).to.be.eql('UserName and Password required.');
        });
        describe('Mismatching Password Criterias, user should not be created', () => {
            var errorMessage = "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer."
            it('Password only lower Characters', async function() {
                let user = new User(faker.internet.email(), "testingtest");
                let response = await request.post(accountEndpoint)
                    .send(user);
                expect(response.status).to.be.eql(400);
                expect(response.body.code).to.be.eql('1300');
                expect(response.body.message).to.be.eql(errorMessage);
            });
            it('Password only capital Characters', async function() {
                let user = new User(faker.internet.email(), "TESTINGTEST");
                let response = await request.post(accountEndpoint)
                    .send(user);
                expect(response.status).to.be.eql(400);
                expect(response.body.code).to.be.eql('1300');
                expect(response.body.message).to.be.eql(errorMessage);
            });
            it('Password only numbers', async function() {
                let user = new User(faker.internet.email(), "1234567890");
                let response = await request.post(accountEndpoint)
                    .send(user);
                expect(response.status).to.be.eql(400);
                expect(response.body.code).to.be.eql('1300');
                expect(response.body.message).to.be.eql(errorMessage);
            });
            it('Password only special Characteers', async function() {
                let user = new User(faker.internet.email(), "!@#$%^&*&*(");
                let response = await request.post(accountEndpoint)
                    .send(user);
                expect(response.status).to.be.eql(400);
                expect(response.body.code).to.be.eql('1300');
                expect(response.body.message).to.be.eql(errorMessage);
            });
        });
    });
})