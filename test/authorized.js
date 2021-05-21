const User = require('../controllers/models/user.js');

const request = require('supertest')('https://demoqa.com');
const expect = require('chai').expect;


describe('Authorization API', () => {
    describe('Authorized User', () => {
        it('The default user should be authorized', async function () {
            const defaultUser = new User("ibrian93", "MyTesting83!");
            const response = await request.post('/Account/v1/Authorized')
                .send(defaultUser)
            expect(response.status).to.eql(200);
            expect(response.body).to.equal(true);
        });
    });
});