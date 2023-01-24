var environment = require('../fixtures/environment.json');

class SignInPage {
    visit() {
        cy.visit(environment.sign_in_url);
    }
    
    fillEmail(value) {
        const emailField = cy.get('#userName');
        emailField.type(value);
        return this;
    }
    
    fillPassword(value) {
        const passwordField = cy.get('#password');
        passwordField.type(value);
        return this;
    }
}

export default SignInPage;