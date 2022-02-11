import { click } from "@testing-library/user-event/dist/click"

describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/')
      .get('.button_1')
      .click()
      .get('.buttonSum')
      .click()
      .get('.button_5')
      .click()
      .get('.buttonIgu')
      .click()
      .get('.numberDisplay')
      .should('have.text', '6')
  })
})