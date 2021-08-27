import * as Helper from '../support/helpers'
import * as Http from '../support/get-mocks'
import { OkGet } from '../helpers/http-helpers'

describe('Test base url', () => {
  beforeEach(() => {
    OkGet()
  })
  it('Shoul Validate header', () => {
    Http.mockGetHeader(OkGet())
    Helper.testHttpHeadersContentType()
  })
})
