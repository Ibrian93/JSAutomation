describe('DemoQA Login Test cases', () => {
    before
    it('Login User with valid credentials', () => {
        cy.visit('/')
        cy.get('#login').click()
        cy.login('ibrian93', 'MyTesting83!')
        cy.get('#userName-value').should('contain','ibrian93')
    });

    it('Register User with valid inputs', () => {
    }).skip();
});

