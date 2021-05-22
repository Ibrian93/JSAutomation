const User = require('../controllers/models/user.js');

const config = require('../config/environment.json');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
var faker = require('faker');

chai.use(chaiHttp);

var authorizedEndpoint = "/Account/v1/Authorized";
var userRegistrationEndpoint = "/Account/v1/User";
const request = chai.request(config.host);

describe('Account API, Authorization Endpoint', () => {
    describe('Authorized User', () => {
        it('The default user should be authorized', function () {
            const defaultUser = new User("ibrian93", "MyTesting83!");
            request.post(authorizedEndpoint)
                .send(defaultUser)
                .then(function (res) {
                    expect(res.status).to.eql(200);
                    expect(res.body).to.equal(true);
                })
                .catch(function (err) {
                    throw err;
                });         
        });
    });
    describe('Non authorized User', () => {
        it('A user who has not generated a token should not be authorized', async function() {
            const randomUser = new User(faker.internet.email(), "MyTesting83!");
            await request.post(userRegistrationEndpoint)
                .send(randomUser);
            request.post(authorizedEndpoint)
                .send(randomUser)
                .then(function (res) {
                    expect(res.status).to.eql(200);
                    expect(res.body).to.equal(false);
                })
                .catch(function (err) {
                    throw err;
                });
        });
        it('A non existant user should not be authorized', function() {
            const randomUser = new User(faker.internet.email(), "MyTesting83!");
            request.post(authorizedEndpoint)
                .send(randomUser)
                .then((res) => {
                    expect(res.status).to.eql(404);
                    expect(res.body.code).to.eql('1207');
                    expect(res.body.message).to.eql('User not found!');
                })
                .catch((err) => {
                    throw err;
                });
            
        });
        it('No username provided', function() {
            request.post(authorizedEndpoint)
                .send({password: "MyTesting83!"})
                .then((res) => {
                    expect(res.status).to.eql(400);
                    expect(res.body.code).to.eql('1200');
                    expect(res.body.message).to.eql('UserName and Password required.');
                })
                .catch((err) => {
                    throw err;
                });
        });
        it('No password provided', async function() {
            request.post(authorizedEndpoint)
                .send({userName: "Testing"})
                .then((res) => {
                    expect(res.status).to.eql(400);
                    expect(res.body.code).to.eql('1200');
                    expect(res.body.message).to.eql('UserName and Password required.');
                })
                .catch((err) => {
                    throw err;
                });
        });
    });
});