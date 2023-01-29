var environment = require('../fixtures/environment.json');

class SignInPage {
    visit() {
        cy.visit(environment.sign_in_url);
    }
    
    fillEmail(value: string) {
        const emailField = cy.get('#userName');
        emailField.type(value);
        return this;
    }
    
    fillPassword(value: string) {
        const passwordField = cy.get('#password');
        passwordField.type(value);
        return this;
    }

    submit() {
        const loginButton = cy.get('#login');
        loginButton.click();
    }
}

export default SignInPage;
