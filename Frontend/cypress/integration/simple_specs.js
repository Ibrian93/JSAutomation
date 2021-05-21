describe('My first test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com');
    });
});