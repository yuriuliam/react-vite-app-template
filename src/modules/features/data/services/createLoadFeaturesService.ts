import { FeaturesModel } from '../../models'

import { type IHttpClient } from '@/data/protocols/http'

import { createFakeFeatureFlags } from '@/shared/utils/faker'

/** @deprecated This is a faker!! */
const requestFeatures = async () => {
  const featureFlags = await createFakeFeatureFlags(true)

  return featureFlags
}

const createLoadFeaturesService = (_httpClient: IHttpClient) => {
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

      return FeaturesModel.parse(data)
    } catch (error) {
      return null
    }
  }
}

export { createLoadFeaturesService }