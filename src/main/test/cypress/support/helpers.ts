
export const testHttpHeadersContentType = (): void => {
  cy.get('@request')
    .its('headers')
    .its('content-type')
    .should('include', 'application/json')
}
