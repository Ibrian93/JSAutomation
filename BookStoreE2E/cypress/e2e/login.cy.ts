import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';


describe('DemoQA Login Test cases', () => {
    it('Login User with valid credentials', () => {
        const homePage = new HomePage();
        homePage.visit();
        homePage.goToSignInPage();

        const signInPage = new SignInPage();
        signInPage.fillEmail('ibrian93');
        signInPage.fillPassword('MyTesting83!');
        signInPage.submit();

        cy.get('#userName-value').should('contain','ibrian93')
    });

    it('Register User with valid inputs', () => {
        const homePage = new HomePage();
        homePage.visit();
    }
});

