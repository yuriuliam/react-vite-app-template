import axios, { isAxiosError } from 'axios'

import { HttpError } from '@/shared/errors/HttpError'

const createHttpClient = (baseURL: string): App.Infra.Http.IHttpClient => {
  const httpClient = axios.create({ baseURL })

  const request = async <T>(options: App.Infra.Http.RequestOptions) => {
    try {
      const response = await httpClient.request<T>(options)

      const result: App.Infra.Http.Response<T> = {
        data: response.data,
        status: response.status,
      }

      return result
    } catch (error) {
      throw isAxiosError(error) ? new HttpError(error) : error
    }
  }

  return { request }
}

export { createHttpClient }
