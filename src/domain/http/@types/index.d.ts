type BaseHttpClientOptions = Pick<RequestInit, 'mode'>

type RequestMethods = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS'

type BaseRequestOptions = {
  data?: App.ObjectType | undefined
  headers?: Record<string, string> | undefined
  method: RequestMethods
  params?: Record<string, string> | undefined
  uri: string
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

type FetchResponse<T = any> = {
  data: T | undefined
  status: number
}

type SafeFetchResponse<T = any> = Omit<FetchResponse<T>, 'data'> &
  ({ data: T; isOk: true } | { data: null; isOk: false })

declare global {
  declare namespace App.Domain.Http {
    type HttpResponse = Response

    type RequestOptions =
      | GETOptions
      | POSTOptions
      | PATCHOptions
      | PUTOptions
      | DELETEOptions
      | OPTIONSOptions

    type RequestFn = <T>(options: RequestOptions) => Promise<FetchResponse<T>>
    type SafeRequestFn = <T>(
      options: RequestOptions,
    ) => Promise<SafeFetchResponse<T>>

    interface IHttpClient {
      request: RequestFn
      safeRequest: SafeRequestFn
    }

    type CreateHttpClientFn = (
      baseUrl: string,
      baseOptions?: BaseHttpClientOptions | undefined,
    ) => IHttpClient
  }
}

export = global
