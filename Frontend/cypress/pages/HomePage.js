var environment = require('../fixtures/environment.json');
import SignInPage from './SignInPage';

class HomePage {
    visit() {
        cy.visit(environment.home_page_url);
    }
    goToSignInPage() {
        const loginButton = cy.get('#login');
        loginButton.click();
        const signIn = new SignInPage();
        return signIn;
    }

    getLoggedUserName() {
        return cy.get('#userName-value');
    }
}

export default HomePage;