const User = require('../controllers/models/user.js');

const config = require('../config/environment.json');
const chai = require('chai');
const chaiHttp = require('chai-http');
var faker = require('faker');
const { expect } = require('chai');

chai.use(chaiHttp)


var AuthorizationEndPoint = "/Account/v1/GenerateToken";
var UserRegistrationEndpoint = "/Account/v1/User";


describe('Account API, User Generation Token Endpoint', () => {
    describe('User with valid credentials can generate token', () => {
        it('User generates a token', async function() {
            const randomUser = new User(faker.internet.email(), "MyTesting83!");
            await chai.request(config.host)
                .post(UserRegistrationEndpoint)
                .send({userName: randomUser.userName, password: "MyTesting83!"});
            chai.request(config.host)
                .post(AuthorizationEndPoint)
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