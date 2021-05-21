const User = require('../controllers/models/user.js');

const config = require('../config/environment.json');
const request = require('supertest')(config.host);
const expect = require('chai').expect;
var faker = require('faker');
const { response } = require('express');


describe('Account API, User endpoint', () => {
    describe('User Registration Successful', () => {
        it('The user who meets the proper criterias, should be successfully register', async function() {
            let defaultUser = new User(faker.internet.email(), "MyTesting83!");
            let response = await request.post('/Account/v1/User')
                .send(defaultUser);
            expect(response.status).to.be.eql(201);
            expect(response.body.userID).to.not.be.undefined;
            expect(response.body.username).to.be.eql(defaultUser.userName);
        })
    })
})