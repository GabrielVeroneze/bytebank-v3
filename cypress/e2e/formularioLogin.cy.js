describe('Formulário de Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Não deve permitir um email inválido', () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('exemplo@email')
        cy.getByData('senha-input').type('Senha123123')
        cy.getByData('botao-enviar').click()

        cy.getByData('mensagem-erro')
            .should('exist')
            .and('have.text', 'O email digitado é inválido')
    })
})
