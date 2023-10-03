import { APIBase } from './base'

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
  @InjectFaker(
    faker =>
      ({
        id: faker.string.uuid(),
        email: faker.internet.email(),
        name: faker.person.fullName(),
        token: faker.string.nanoid(64),
      }) satisfies AppModels.AuthResponse,
  )
  public async authenticate() {
    try {
      const { data } = await this.fetcher('/auth/jwt')

      return this.modelValidator.parseAuthResponse(data)
    } catch (error) {
      this.handleFetcherError(error)
      this.modelValidator.handleValidationError(error)

      return null
    }
  }
}

export { APIMain }
