describe('fundamentals test', () => {

  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
  it('Contains correct header text', () => {
    // cy.visit('/fundamentals')
    // Custom command !
    cy.getDataTest('fundamentals-header').should('contains.text','Testing Fundamentals')
    // cy.get('[data-test="fundamentals-header"]').should('contains.text','Testing Fundamentals')
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i) // case insensitive

  })
  it('Accordion works correctly', ()=>{
    // cy.visit('/fundamentals')
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
  })
})