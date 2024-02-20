import { createFakeFeatureFlags } from '@/shared/utils/faker'

/** @deprecated This is a faker!! */
const requestFeatures = async () => {
  const featureFlags = await createFakeFeatureFlags(true)

  return featureFlags
}

const createLoadFeaturesService = (
  _httpClient: App.Modules.Http.IHttpClient,
  responseSchema: App.Modules.Validation.Schema,
) => {
  return async (_token: App.Models.TokenModel) => {
    try {
      // Example of actual code.
      //
      // const { data } = await httpClient.request({
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      //   method: 'GET',
      //   uri: '/users/me/features',
      // })

      const data = await requestFeatures()

      return responseSchema.parse(data)
    } catch (error) {
      return null
    }
  }
}

export { createLoadFeaturesService }
