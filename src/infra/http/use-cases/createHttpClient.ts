import { HttpError } from '@/domain/http/errors/HttpError'

const createHttpClient = (
  baseUrl: string,
  baseOptions: App.Domain.Http.BaseHttpClientOptions = {},
) => {
  const buildUrl = (
    uri: string,
    searchParams?: Record<string, string> | undefined,
  ) => {
    const urlParams = new URLSearchParams(searchParams)

    const fullUrl = new URL(uri.concat(urlParams.toString()), baseUrl)

    return fullUrl
  }

  const request = async <T>(options: App.Domain.Http.RequestOptions) => {
    const { url, params, data = undefined, ...rest } = options

    const urlInput = buildUrl(url, params)

    const response = await fetch(urlInput, {
      ...baseOptions,
      body: data ? JSON.stringify(data) : undefined,
      ...rest,
    })

    if (!response.ok) throw new HttpError(response)

    const result: App.Domain.Http.FetchResponse<T> = {
      data: await response.json(),
      status: response.status,
    }

    return result
  }

  const safeRequest = async <T>(options: App.Domain.Http.RequestOptions) => {
    const { url, params, data = undefined, ...rest } = options

    const urlInput = buildUrl(url, params)

    const response = await fetch(urlInput, {
      ...baseOptions,
      body: data ? JSON.stringify(data) : null,
      ...rest,
    })

    const result: App.Domain.Http.SafeFetchResponse<T> = {
      data: response.ok ? await response.json() : null,
      status: response.status,
      isOk: response.ok,
    }

    return result
  }

  return { request, safeRequest } satisfies App.Domain.Http.IHttpClient
}

export { createHttpClient }
