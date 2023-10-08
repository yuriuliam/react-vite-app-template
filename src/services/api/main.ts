import { APIBase } from './base'

import { authResponseModel } from '@/models/auth'

import { APP, MODE } from '@/utils/constants'
import { InjectFaker } from '@/utils/decorators'
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

  @Deferred(200)
  @InjectFaker<AppModels.AuthResponse>(
    faker => {
      faker.seed(APP.FAKER_SEED)
      return {
        id: faker.string.uuid(),
        email: faker.internet.email(),
        name: faker.person.fullName(),
        token: faker.string.nanoid(64),
      }
    },
    MODE.DEVELOPMENT,
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
