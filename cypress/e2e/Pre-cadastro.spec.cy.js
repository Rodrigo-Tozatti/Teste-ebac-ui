/// <reference types="cypress" />

var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {

  beforeEach(()  => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/edit-account/')
  })

  it('deve completar o pre cadastro com sucesso', () => {

    var nomefaker = faker.name.firstName()
    var sobrenomefaker = faker.name.lastName()
    var emailfaker = faker.internet.email(nomefaker)
    
    cy.get('#reg_email').type(emailfaker)
    cy.get('#reg_password').type('teste_06@teste.com')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nomefaker)
    cy.get('#account_last_name').type(sobrenomefaker)
    cy.get('.woocommerce-Button').click()

    cy.get('.woocommerce-message').should('contain', ('Detalhes da conta modificados com sucesso.'))
    
  })
})