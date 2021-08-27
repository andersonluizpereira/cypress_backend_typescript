const baseUrl: string = Cypress.config().baseUrl

export type HttpResponse<T = any | Object | string> = {
  url
  statusCode: number
  response?: T
  method: string
}

export const OkGet = <T = string> (): HttpResponse<string> => ({
  url: `${baseUrl}/teste`,
  statusCode: 200,
  method: 'GET'
})
