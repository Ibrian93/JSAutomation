let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let host = "https://demoqa.com";

chai.use(chaiHttp);

describe('The given user is authorized', () => {
    it('The default user should be authorized', (done) => {
        let defaultUser = {
            userName: "ibrian93",
            password: "MyTesting83!"
        }
        chai.request(host)
            .post('/Account/v1/Authorized')
            .send(defaultUser)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
});