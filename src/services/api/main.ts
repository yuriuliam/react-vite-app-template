import { APIBase } from './base'

import { authResponseModel } from '@/models/auth'
import { featuresModel } from '@/models/features'

import { APP, FEATURES, MODE } from '@/utils/constants'
import { InjectFaker, Memoize } from '@/utils/decorators'
import { Deferred } from '@/utils/decorators/deferred'
import { createFakeAuthResponse } from '@/utils/faker'

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

  // Remove MODE.DEVELOPMENT if you want to execute the code during development.
  @Memoize({}, MODE.DEVELOPMENT, MODE.TEST)
  @Deferred(200, MODE.DEVELOPMENT, MODE.TEST)
  @InjectFaker(createFakeAuthResponse, MODE.DEVELOPMENT, MODE.TEST)
  public async authenticate() {
    try {
      const { data } = await this.fetcher.post('/auth/jwt')

      return authResponseModel.parse(data)
    } catch (error) {
      this.handleError(error)

      return null
    }
  }

  @Memoize({}, MODE.DEVELOPMENT, MODE.TEST)
  @Deferred(200, MODE.DEVELOPMENT, MODE.TEST)
  @InjectFaker(() => [FEATURES.CYAN_THEME], MODE.DEVELOPMENT, MODE.TEST)
  public async getFeatures(token: string) {
    try {
      const { data } = await this.fetcher.get('/user/features', {
        headers: {
          Authorization: token,
        },
      })

      return featuresModel.parse(data)
    } catch (error) {
      this.handleError(error)

      return null
    }
  }
}

export { APIMain }
