const User = require('../controllers/models/user.js');

const config = require('../config/environment.json');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
var faker = require('faker');

chai.use(chaiHttp);


var authorizationEndPoint = "/Account/v1/GenerateToken";
var userRegistrationEndpoint = "/Account/v1/User";
const request = chai.request(config.host);

describe('Account API, User Generation Token Endpoint', () => {
    describe('User with valid credentials can generate token', () => {
        it('User generates a token', async function() {
            const randomUser = new User(faker.internet.email(), "MyTesting83!");
            await request.post(userRegistrationEndpoint)
                .send({userName: randomUser.userName, password: "MyTesting83!"});
            request.post(authorizationEndPoint)
                .send(randomUser)
                .then(function (res) {
                    expect(res).to.have.status(200);
                })
                .catch(function (err) {
                    throw err;
                });
        })
    });
})