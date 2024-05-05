import { omitKeys } from '@/shared/utils/objects'
import { deferred } from '@/shared/utils/promises'

type CreateAuthenticateUserServiceFn =
  App.Modules.Auth.CreateAuthenticateUserServiceFn

const users = [
  {
    id: '378926fe-abdd-481c-b806-f818c62cdf8b',
    name: 'Yuri Uliam',
    username: 'Yuri_Uliam',
    email: 'mocked@yahoo.com',
    password: 'foobar123',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3ODkyNmZlLWFiZGQtNDgxYy1iODA2LWY4MThjNjJjZGY4YiIsIm5hbWUiOiJMdWthcyBLaXJsaW4iLCJ1c2VybmFtZSI6Ikx1a2FzX0tpcmxpbiIsImVtYWlsIjoibW9ja2VkQHlhaG9vLmNvbSJ9.VIgWauX0QVOtllI2vTUeGj_CxABchzaEBqK3Ilxu5ps',
  },
]

/** @deprecated Use an actual service! */
const fakeFetchUser = async (params: App.Modules.Auth.AuthParams) => {
  const user = users.find(
    user => params.email === user.email && params.password === user.password,
  )

  if (!user) throw new Error('Wrong email and/or password')

  const userWithoutPass = omitKeys(user, 'password')

  return await deferred<App.Modules.Users.UserResponse>(userWithoutPass, 70)
}

const createAuthenticateUserService: CreateAuthenticateUserServiceFn = (
  _httpClient,
  responseSchema,
) => {
  const execute: App.Modules.Auth.AuthenticateUserServiceFn = async params => {
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

  return execute
}

export { createAuthenticateUserService }
