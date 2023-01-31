var environment = require('../fixtures/environment.json');
import SignInPage from './SignInPage';

class HomePage {
    visit() {
        cy.visit(environment.home_page_url);
    }
    goToSignInPage() {
        const loginButton = cy.get('#login');
        loginButton.click();
        const signInPage = new SignInPage();
        return signInPage;
    }

    goToRegisterPage() {
        const newUserButton = get.contains('New User')
        newUserButton.click();
        const registerPage = new RegisterPage();
        return registerPage;
    }

    getLoggedUserName() {
        return cy.get('#userName-value');
    }
}

export default HomePage;
