import Cypress from 'cypress';

describe('Generating a roman number', () => {
  it('Converts the arabic number into roman number', () => {
    cy.visit('../../src/index.html');

    cy.get('[data-testid="numberInput"]').type('25');

    cy.get('[data-testid="submitButton"]').click();

    cy.get('[data-testid="numberInput"]').should('have.value', '');

    cy.contains('XXV');
  })
})