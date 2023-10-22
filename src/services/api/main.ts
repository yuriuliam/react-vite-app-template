import { APIBase } from './base'

import { authResponseModel } from '@/models/auth'
import { featuresResponseModel } from '@/models/features'

import { APP, MODE } from '@/utils/constants'
import { Deferred, Memoize, MockReturn } from '@/utils/decorators'
import {
  createFakeAuthResponse,
  createFakeFeaturesResponse,
} from '@/utils/faker'

/**
 * [API] Main
 */
class APIMain extends APIBase {
  private static _instance: APIMain

  protected constructor() {
    super(APP.NAMES.API_MAIN, import.meta.env.VITE_API_BASE_URL)
  }

  public static getInstance() {
    if (!APIMain._instance) {
      APIMain._instance = new APIMain()
    }

    return APIMain._instance
  }

  // ===========================================================================
  // Remove MODE.DEVELOPMENT if you want to execute the code during development.
  // ===========================================================================

  @Memoize({}, MODE.DEVELOPMENT)
  @Deferred(200, MODE.DEVELOPMENT)
  @MockReturn(createFakeAuthResponse, MODE.DEVELOPMENT)
  public async authenticate() {
    try {
      const { data } = await this.fetcher.post('/auth/jwt')

      return authResponseModel.parse(data)
    } catch (error) {
      this.handleError(error)

      return null
    }
  }

  @Memoize({}, MODE.DEVELOPMENT)
  @Deferred(200, MODE.DEVELOPMENT)
  @MockReturn(createFakeFeaturesResponse, MODE.DEVELOPMENT)
  public async getFeatures(token: string | null) {
    try {
      const { data } = await this.fetcher.get('/users/me/features', {
        headers: { Authorization: token },
      })

      return featuresResponseModel.parse(data)
    } catch (error) {
      this.handleError(error)

      return null
    }
  }
}

export { APIMain }
