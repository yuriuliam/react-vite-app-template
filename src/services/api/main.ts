import { APIBase } from './base'

import { authResponseModel } from '@/models/auth'

import { APP, MODE } from '@/utils/constants'
import { InjectFaker } from '@/utils/decorators'
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

  @Deferred(200, MODE.DEVELOPMENT, MODE.TEST)
  @InjectFaker(
    createFakeAuthResponse,
    MODE.DEVELOPMENT, // Remove this to execute the function instead of faker during development.
    MODE.TEST,
  )
  public async authenticate() {
    try {
      const { data } = await this.fetcher('/auth/jwt')

      return authResponseModel.parse(data)
    } catch (error) {
      this.handleError(error)

      return null
    }
  }
}

export { APIMain }
