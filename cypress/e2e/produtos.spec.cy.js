/// <reference types="cypress" />

describe('funcionalidade pagina de produtos', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  })

  it('deve selecionar um produto da lista', () => {
    cy.get('.product-block')
      //.first()
      //.last()
      //.eq(3)
      .contains('Aero Daily Fitness Tee')
      .click()
  });


  it.only('deve selecionar um produto da lista', () => {

    var quantidade = 6

    cy.get('.product-block')
      .contains('Aero Daily Fitness Tee')
      .click()
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Brown').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')

  });


});