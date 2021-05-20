const User = require('../controllers/models/user.js');


let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let host = "https://demoqa.com";


chai.use(chaiHttp);

describe('The given user is authorized', () => {
    it('The default user should be authorized', (done) => {

        const defaultUser = new User("ibrian93", "MyTesting83!");
        chai.request(host)
            .post('/Account/v1/Authorized')
            .send(defaultUser)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
});