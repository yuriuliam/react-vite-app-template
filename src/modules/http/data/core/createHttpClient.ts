import axios, { isAxiosError } from 'axios'

import { HttpError } from '@/modules/http/data/errors/HttpError'

const createHttpClient = (baseURL: string): App.Modules.Http.IHttpClient => {
  const httpClient = axios.create({ baseURL })

  const request = async <T>(options: App.Modules.Http.RequestOptions) => {
    try {
      const response = await httpClient.request<T>(options)

      const result: App.Modules.Http.Response<T> = {
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
