import { tokenWithScheme } from '@/shared/utils/http'

const createLoadFeaturesService = <T>(
  httpClient: App.Domain.Http.IHttpClient,
  responseSchema: App.Domain.Validation.SchemeParser<T>,
) => {
  return async (token: App.Models.Token | null) => {
    try {
      const { data } = await httpClient.request<T>({
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
