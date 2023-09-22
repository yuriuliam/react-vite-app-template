import { APIBase } from '../base'

import { APP } from '@/utils/constants'
import { InjectFaker } from '@/utils/decorators'

/**
 * [API] Main v0
 */
class APIMainV0 extends APIBase {
  private static _instance: APIMainV0

  private constructor() {
    super(APP.NAMES.MAIN.V0, import.meta.env.VITE_API_BASE_URL)
  }

  public static getInstance() {
    if (!APIMainV0._instance) {
      APIMainV0._instance = new APIMainV0()
    }

    return APIMainV0._instance
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

export { APIMainV0 }
