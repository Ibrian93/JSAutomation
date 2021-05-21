const User = require('../controllers/models/user.js');

const request = require('supertest')('https://demoqa.com');
const expect = require('chai').expect;
var faker = require('faker');


describe('Authorization API', () => {
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
        })
    })
});