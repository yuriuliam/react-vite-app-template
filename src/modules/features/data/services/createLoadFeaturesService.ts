import { FeaturesModel } from '../../models'

import { type IHttpClient } from '@/data/protocols/http'

import { TokenModel } from '@/shared/models'

const createLoadFeaturesService = (httpClient: IHttpClient) => {
  return async (token: App.Models.TokenModel) => {
    void TokenModel.parse(token)

    try {
      const { data } = await httpClient.request({
        headers: {
          Authorization: token,
        },
        method: 'GET',
        uri: '/users/me/features',
      })

      return FeaturesModel.parse(data)
    } catch (error) {
      return null
    }
  }
}

export { createLoadFeaturesService }
