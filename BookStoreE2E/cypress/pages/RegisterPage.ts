
class RegisterPage {

    fillForm(firstName: string, lastName: string, userName: string, password: string) {
        cy.get('firstname-label').value('Brian')
        cy.get('lastname').value('Testing')
    }
}

