import { APIBase } from './base'

import { APP } from '@/utils/constants'
import { InjectFaker } from '@/utils/decorators'

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

  @InjectFaker(
    faker => ({
      id: faker.string.uuid(),
      email: faker.internet.email(),
      name: faker.person.fullName(),
      token: faker.string.nanoid(64),
    }),
    true,
  )
  public async authenticate() {
    try {
      const { data } = await this.fetcher<App.UserResponse>('/users/me')

      return data
    } catch (error) {
      this.handleFetcherError(error)

      return null
    }
  }
}

export { APIMain }
