import axios, {
  isAxiosError,
  type AxiosHeaders,
  type RawAxiosRequestHeaders,
} from 'axios'

import { HttpError } from '@/shared/errors/HttpError'

type RequestHeaders = RawAxiosRequestHeaders | AxiosHeaders

type RequestMethods = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS'

type BaseRequestOptions = {
  data?: App.Utils.ObjectType | undefined
  headers?: RequestHeaders | undefined
  method: RequestMethods
  params?: unknown | undefined
  uri: string
}

type RequestOptionsWithoutData = Omit<BaseRequestOptions, 'data'>

type MethodOptions<
  TMethod extends RequestMethods,
  TOptions extends BaseRequestOptions,
> = { method: TMethod } & Omit<TOptions, 'method'>

type GETOptions = MethodOptions<'GET', RequestOptionsWithoutData>
type POSTOptions = MethodOptions<'POST', BaseRequestOptions>
type PATCHOptions = MethodOptions<'PATCH', BaseRequestOptions>
type PUTOptions = MethodOptions<'PUT', BaseRequestOptions>
type DELETEOptions = MethodOptions<'DELETE', RequestOptionsWithoutData>
type OPTIONSOptions = MethodOptions<'OPTIONS', RequestOptionsWithoutData>

type RequestOptions =
  | GETOptions
  | POSTOptions
  | PATCHOptions
  | PUTOptions
  | DELETEOptions
  | OPTIONSOptions

type Response<T = any> = {
  data: T
  status: number
}

interface IHttpClient {
  request: <T>(config: RequestOptions) => Promise<Response<T>>
}

const createHttpClient = (baseURL: string): IHttpClient => {
  const httpClient = axios.create({ baseURL })

  const request = async <T>(options: RequestOptions) => {
    try {
      const response = await httpClient.request<T>(options)

      const result: Response<T> = {
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
export type { IHttpClient, Response }
