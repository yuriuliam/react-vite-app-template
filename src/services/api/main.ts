import { faker } from '@faker-js/faker'

import { APIBase } from './base'

class APIMain extends APIBase {
  private static _instance: APIMain

  private constructor() {
    super('API [Main]', import.meta.env.VITE_API_BASE_URL)
  }

  public static getInstance() {
    if (!APIMain._instance) {
      APIMain._instance = new APIMain()
    }

    return APIMain._instance
  }

  public async getAuthUser() {
    try {
      // const { data } = await this.fetcher<App.UserResponse>('/users/me')
      const data: App.UserResponse = {
        id: faker.string.uuid(),
        email: faker.internet.email(),
        name: faker.person.fullName(),
        token: faker.string.nanoid(64),
      }

      return data
    } catch (error) {
      this.handleFetcherError(error)

      return null
    }
  }
}

export { APIMain }
