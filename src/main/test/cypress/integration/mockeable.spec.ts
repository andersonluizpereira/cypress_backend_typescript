// eslint-disable-next-line @typescript-eslint/no-unused-vars
const baseUrl: string = Cypress.config().baseUrl

describe('Test base url', () => {
  beforeEach(() => {
    cy.request(`${baseUrl}/teste`).as('getMockeable')
  })
  it('Shoul Validate header', () => {
    cy.get('@getMockeable')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })
})
