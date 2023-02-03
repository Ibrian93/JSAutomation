import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';


describe('DemoQA Login Test cases', () => {
    it('Login User with valid credentials', () => {
        const homePage = new HomePage();
        homePage.visit();
        homePage.goToSignInPage();

        cy.login('ibrian93', 'MyTesting83!')

        cy.get('#userName-value').should('contain','ibrian93')
    });

    it('Register User with valid inputs', () => {
        const homePage = new HomePage();
        homePage.visit();
        
    });
});

