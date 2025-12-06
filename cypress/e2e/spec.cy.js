describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
});

it('Admin Login', function() {
  cy.visit('http://localhost:5173/')
  cy.get('#root button.navbar-btn').click();
  cy.get('#email').click();
  cy.get('#email').type('admin@abc.com');
  cy.get('#password').type('123456');
  cy.get('#root button.mt-3').click();
  cy.get('#root button.navbar-btn').click();
  
});