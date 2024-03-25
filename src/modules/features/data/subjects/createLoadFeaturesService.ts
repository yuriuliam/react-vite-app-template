import { deferred } from '@/shared/utils/promises'

const featuresByUserToken: Record<
  App.Domain.Shared.Token,
  App.Modules.Features.FeaturesResponse
> = {
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM3ODkyNmZlLWFiZGQtNDgxYy1iODA2LWY4MThjNjJjZGY4YiIsIm5hbWUiOiJMdWthcyBLaXJsaW4iLCJ1c2VybmFtZSI6Ikx1a2FzX0tpcmxpbiIsImVtYWlsIjoibW9ja2VkQHlhaG9vLmNvbSJ9.VIgWauX0QVOtllI2vTUeGj_CxABchzaEBqK3Ilxu5ps':
    [
      { id: '1', code: 'feature_show_name', description: "Show user's name" },
      { id: '2', code: 'feature_foo_bar', description: 'Foo Bar' },
    ],
}

/** @deprecated This is a faker! */
const fakeFetchUserFeatures = async (token: string | null) => {
  if (!token) throw new Error('User not authenticated!')

  if (!(token in featuresByUserToken)) throw new Error('Wrong email/password')

  const features = featuresByUserToken[token]

  return await deferred<App.Modules.Features.FeaturesResponse>(features, 50)
}

const createLoadFeaturesService = <T>(
  _httpClient: App.Domain.Http.IHttpClient,
  responseSchema: App.Domain.Validation.SchemeParser<T>,
) => {
  return async (token: App.Domain.Shared.Token | null) => {
    try {
      // const { data } = await httpClient.request({
      //   headers: { Authorization: tokenWithScheme(token) },
      //   method: 'GET',
      //   url: '/users/me/features',
      // })

      const data = await fakeFetchUserFeatures(token)

      return responseSchema.parse(data)
    } catch (error) {
      return null
    }
  }
}

export { createLoadFeaturesService }
