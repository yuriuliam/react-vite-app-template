import { APIBase } from './base'

import { authResponseModel } from '@/models/auth'

import { APP } from '@/utils/constants'
import { InjectFaker, Memoize } from '@/utils/decorators'
import { Deferred } from '@/utils/decorators/deferred'

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

  @Memoize()
  @Deferred(200)
  @InjectFaker<AppModels.AuthResponse>(faker => ({
    id: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    token: faker.string.nanoid(64),
  }))
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
