const User = require('../controllers/models/user.js');


let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let config = require('../config/environment.json');


chai.use(chaiHttp);

describe('The given user is authorized', () => {
    it('The default user should be authorized', (done) => {

        const defaultUser = new User("ibrian93", "MyTesting83!");
        chai.request(config.host)
            .post('/Account/v1/Authorized')
            .send(defaultUser)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.equal(true);
                done();
            })
    });
});