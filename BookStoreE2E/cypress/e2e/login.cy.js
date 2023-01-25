var environment = require('../fixtures/environment.json');

describe('DemoQA Login Test cases', () => {
    it('Login User with valid credentials', () => {
        cy.visit(environment.home_page_url);
        cy.get('#login').click();
        cy.get('#userName').type('ibrian93');
        cy.get('#password').type('MyTesting83!')
        cy.get('#login').click();
        cy.get('#userName-value').should('contain','ibrian93')
    });
});