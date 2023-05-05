describe('template spec', () => {
  before(() => {
    // cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  });

  it('passes', () => {
    cy.visit('/');
  });
});
