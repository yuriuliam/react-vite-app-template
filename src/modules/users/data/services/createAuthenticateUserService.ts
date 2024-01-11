import { UserResponseModel } from '../../models/UserResponseModel'

import { createFakerUserResponses } from '@/shared/utils/faker'

type AuthParams = App.Modules.User.AuthenticationParamsModel

/** @deprecated This is a faker!! */
const requestAuthentication = async (params: AuthParams) => {
  const data = await createFakerUserResponses(true)

  const user = data.find(user => user.email === params.email)

  if (!user) return null

  if (user.password !== params.password) return null

  return user
}

const createAuthenticateUserService = (
  _httpClient: App.Infra.Http.IHttpClient,
) => {
  return async (params: AuthParams) => {
    try {
      // Example of actual code.
      //
      // const { data } = await httpClient.request({
      //   data: params,
      //   method: 'POST',
      //   uri: '/auth/jwt',
      // })

      const data = await requestAuthentication(params)

      return UserResponseModel.parse(data)
    } catch (error) {
      return null
    }
  }
}

export { createAuthenticateUserService }
