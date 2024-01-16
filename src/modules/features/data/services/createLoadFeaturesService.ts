import { createFakeFeatureFlags } from '@/shared/utils/faker'

import { FeatureModel } from '../../models/FeatureModel'

/** @deprecated This is a faker!! */
const requestFeatures = async () => {
  const featureFlags = await createFakeFeatureFlags(true)

  return featureFlags
}

const createLoadFeaturesService = (_httpClient: App.Infra.Http.IHttpClient) => {
  return async (_token: App.Models.TokenModel) => {
    try {
      // Example of actual code.
      //
      // const { data } = await httpClient.request({
      //   headers: {
      //     Authorization: token,
      //   },
      //   method: 'GET',
      //   uri: '/users/me/features',
      // })

      const data = await requestFeatures()

      return FeatureModel.parse(data)
    } catch (error) {
      return null
    }
  }
}

export { createLoadFeaturesService }
