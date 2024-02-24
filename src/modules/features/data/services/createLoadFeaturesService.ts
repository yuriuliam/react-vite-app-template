import { tokenWithScheme } from '@/shared/utils/http'

const createLoadFeaturesService = <T>(
  httpClient: App.Modules.Http.IHttpClient,
  responseSchema: App.Modules.Validation.SchemeParser<T>,
) => {
  return async (token: App.Models.TokenModel | null) => {
    try {
      const { data } = await httpClient.request({
        headers: {
          Authorization: tokenWithScheme(token),
        },
        method: 'GET',
        url: '/users/me/features',
      })

      return responseSchema.parse(data)
    } catch (error) {
      return null
    }
  }
}

export { createLoadFeaturesService }
