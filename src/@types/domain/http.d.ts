declare global {
  declare namespace App.Domain.Http {
    type RequestMethods =
      | 'GET'
      | 'POST'
      | 'PATCH'
      | 'PUT'
      | 'DELETE'
      | 'OPTIONS'

    type BaseRequestOptions = {
      data?: App.ObjectType | undefined
      headers?: Record<string, string> | undefined
      method: RequestMethods
      params?: Record<string, string> | undefined
      url: string
    }

    type RequestOptionsWithoutData = Omit<BaseRequestOptions, 'data'> & {
      data?: undefined
    }

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

    type FetchResponse<T = any> = {
      data: T
      status: number
    }

    type SafeFetchResponse<T = any> = Omit<FetchResponse<T>, 'data'> &
      ({ data: T; isOk: true } | { data: null; isOk: false })

    interface IHttpClient {
      request: <T>(config: RequestOptions) => Promise<FetchResponse<T>>
      safeRequest: <T>(config: RequestOptions) => Promise<SafeFetchResponse<T>>
    }

    type BaseHttpClientOptions = Pick<RequestInit, 'mode'>
  }
}

export = global
