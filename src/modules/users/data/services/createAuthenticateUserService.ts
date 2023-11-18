import { UserResponseModel } from '../../models'

import { type IHttpClient } from '@/data/protocols/http'

type AuthParams = App.Modules.User.AuthenticationParamsModel

const createAuthenticateUserService = (httpClient: IHttpClient) => {
  return async (params: AuthParams) => {
    try {
      const { data } = await httpClient.request({
        data: params,
        method: 'POST',
        uri: '/auth/jwt',
      })

      return UserResponseModel.parse(data)
    } catch (error) {
      return null
    }
  }
}

export { createAuthenticateUserService }
