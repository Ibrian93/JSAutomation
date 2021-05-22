import HomePage from '../pages/HomePage';

describe('DemoQA Login Test cases', () => {
    it('Login User with valid credentials', () => {
        const homePage = new HomePage();
        homePage.visit();

        const signInPage = homePage.goToSignInPage();
        signInPage.fillEmail("ibrian93");
        signInPage.fillPassword("MyTesting83!");
        signInPage.submit();
    });
});