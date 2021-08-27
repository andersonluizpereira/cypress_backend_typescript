import { HttpResponse } from '../helpers'

export const mockGetOK = (httpResponse: HttpResponse): void => {
  cy.request(httpResponse.method,httpResponse.url, httpResponse.response)
    .as('request').then(respCypress => {
      expect(respCypress.status)
        .to.eq(httpResponse.statusCode)
      expect(respCypress)
        .to.have.property('headers')
    })
}
