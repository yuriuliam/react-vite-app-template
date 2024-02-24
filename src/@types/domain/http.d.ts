import { type AxiosHeaders, type RawAxiosRequestHeaders } from 'axios'

declare global {
  declare namespace App.Domain.Http {
    type RequestHeaders = RawAxiosRequestHeaders | AxiosHeaders

    type RequestMethods =
      | 'GET'
      | 'POST'
      | 'PATCH'
      | 'PUT'
      | 'DELETE'
      | 'OPTIONS'

    type BaseRequestOptions = {
      data?: App.ObjectType | undefined
      headers?: RequestHeaders | undefined
      method: RequestMethods
      params?: unknown | undefined
      url: string
      withCredentials?: boolean | undefined
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
  }
}

export = global
