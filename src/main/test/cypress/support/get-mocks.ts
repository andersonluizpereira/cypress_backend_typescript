import * as Http from './http-mocks'
import { HttpResponse } from '../helpers/http-helpers'

export const mockGetHeader = (httpResponse: HttpResponse): void => Http.mockGetOK(httpResponse)
