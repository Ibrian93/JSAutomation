const User = require('../controllers/models/user.js');

const config = require('../config/environment.json');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

var { faker } = require('@faker-js/faker');

chai.use(chaiHttp);

var accountEndpoint = "/Account/v1/User";
const request = chai.request(config.host);


describe('Account API, User endpoint', () => {
    describe('User Registration Successful', () => {
        it('The user who meets the proper criterias, should be successfully register', function () {
            let defaultUser = new User(faker.internet.email(), 'MyTesting83!');
            request.post(accountEndpoint)
                .send(defaultUser)
                .then((res) => {
                    expect(res.status).to.be.eql(201);
                    expect(res.body.userID).to.not.be.undefined;
                    expect(res.body.username).to.be.eql(defaultUser.userName);
                })
                .catch((err) => {
                    throw err;
                });
        });
    });
    describe('User registration not successful', () => {
        it('The user with no username criteria should not be able to register', function () {
            let user = new User(undefined, 'MyTesting83!');
            request.post(accountEndpoint)
                .send(user)
                .then((res) => {
                    expect(res.status).to.be.eql(400);
                    expect(res.body.code).to.be.eql('1200');
                    expect(res.body.message).to.be.eql('UserName and Password required.');
                })
                .catch((err) => {
                    throw err;
                });
        });
        it('The user with no password criteria should not be able to register', function () {
            let user = new User(faker.internet.email());
            request.post(accountEndpoint)
                .send(user)
                .then((res) => {
                    expect(res.status).to.be.eql(400);
                    expect(res.body.code).to.be.eql('1200');
                    expect(res.body.message).to.be.eql('UserName and Password required.');
                })
                .catch((err) => {
                    throw err;
                });
        });
        describe('Mismatching Password Criterias, user should not be created', () => {
            var errorMessage = "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer."
            it('Password only lower Characters', function () {
                let user = new User(faker.internet.email(), "testingtest");
                request.post(accountEndpoint)
                    .send(user)
                    .then((res) => {
                        expect(res.status).to.be.eql(400);
                        expect(res.body.code).to.be.eql('1300');
                        expect(res.body.message).to.be.eql(errorMessage);
                    })
                    .catch((err) => {
                        throw err;
                    });
            });
            it('Password only capital Characters', function () {
                let user = new User(faker.internet.email(), "TESTINGTEST");
                request.post(accountEndpoint)
                    .send(user)
                    .then((res) => {
                        expect(res.status).to.be.eql(400);
                        expect(res.body.code).to.be.eql('1300');
                        expect(res.body.message).to.be.eql(errorMessage);
                    })
                    .catch((err) => {
                        throw err;
                    });

            });
            it('Password only numbers', function () {
                let user = new User(faker.internet.email(), "1234567890");
                request.post(accountEndpoint)
                    .send(user)
                    .then((res) => {
                        expect(res.status).to.be.eql(400);
                        expect(res.body.code).to.be.eql('1300');
                        expect(res.body.message).to.be.eql(errorMessage);
                    })
                    .catch((err) => {
                        throw err;
                    });

            });
            it('Password only special Characteers', async function () {
                let user = new User(faker.internet.email(), "!@#$%^&*&*(");
                request.post(accountEndpoint)
                    .send(user)
                    .then((res) => {
                        expect(res.status).to.be.eql(400);
                        expect(res.body.code).to.be.eql('1300');
                        expect(res.body.message).to.be.eql(errorMessage);
                    })
                    .catch((err) => {
                        throw err;
                    });
            });
        });
    });
})