# Backend Automation Testing

This is an automation repository which I developed using javascript. 
The main tools I have used are:

- Mocha
- Chai
- Supertest

In order to run the tests make sure you are within the `Backend` folder and run the following command:

`npm install`

that will allow you to install all the dependencies that have been specified within the `package.json`. 

Then execute the following command:

`npm test test/`

And that will allow you to run all the tests.

The API undertest is the Book Store API provided by demoqa.com and here you can find the [Swagger](https://demoqa.com/swagger/#/) page where there are exposed all the endpoints.

## Explanation Frameworks/Libraries/Modules

### [Mocha](https://mochajs.org/)
Mocha is a Javascript test framework which allows me to run my tests. The main reason I have chosen it is due to the way I can describe my tests and the community support behind.

### [Chai](https://www.chaijs.com/)
Chai is an assertion library which allows me to set the expectations. I found it really useful and intuitive, and as I was coming from doing Postman Tests the syntax was already familiar to me.





## WIP docker
The next phase for this project is to add more tests so as to assure the whole API, and once finished, implement Docker.
