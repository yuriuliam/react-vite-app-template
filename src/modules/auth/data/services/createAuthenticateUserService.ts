import { omitKeys } from '@/shared/utils/objects'
import { deferred } from '@/shared/utils/promises'

type AuthParams = App.Modules.Auth.AppAuthenticationParams

const users = [
  {
    id: '378926fe-abdd-481c-b806-f818c62cdf8b',
    name: 'Lukas Kirlin',
    username: 'Lukas_Kirlin',
    email: 'mocked@yahoo.com',
    password: 'mocked@foobar',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3ODkyNmZlLWFiZGQtNDgxYy1iODA2LWY4MThjNjJjZGY4YiIsIm5hbWUiOiJMdWthcyBLaXJsaW4iLCJ1c2VybmFtZSI6Ikx1a2FzX0tpcmxpbiIsImVtYWlsIjoibW9ja2VkQHlhaG9vLmNvbSJ9.VIgWauX0QVOtllI2vTUeGj_CxABchzaEBqK3Ilxu5ps',
  },
]

const fakeFetchUser = async (params: AuthParams) => {
  const user = users.find(
    user => params.email === user.email && params.password === user.password,
  )

  if (!user) throw new Error('Wrong email/password')

  const userWithoutPass = omitKeys(user, 'password')

  return await deferred(userWithoutPass, 70)
}

const createAuthenticateUserService = <T>(
  _httpClient: App.Modules.Http.IHttpClient,
  responseSchema: App.Modules.Validation.SchemeParser<T>,
) => {
  return async (params: AuthParams) => {
    try {
      // const { data } = await httpClient.request({
      //   data: params,
      //   method: 'POST',
      //   uri: '/auth/jwt',
      // })

      const data = await fakeFetchUser(params)

      return responseSchema.parse(data)
    } catch (error) {
      return null
    }
  }
}

export { createAuthenticateUserService }
