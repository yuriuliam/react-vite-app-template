import { fetch, Body } from '@tauri-apps/api/http'

import { HttpError } from '@/domain/http/errors/HttpError'

import { withUrl } from './withUrl'

const createHttpClient: App.Domain.Http.CreateHttpClientFn = (
  baseUrl,
  baseOptions = {},
) => {
  const fetchResponse = async (options: App.Domain.Http.RequestOptions) => {
    const { uri, params, data = undefined, ...rest } = options

    const urlInput = withUrl({ baseUrl })
      .uri(uri)
      .searchParams(new URLSearchParams(params))
      .build()

    const response = await fetch<any>(urlInput.toString(), {
      ...baseOptions,
      body: data ? Body.json(data) : undefined,
      ...rest,
    })

    return response
  }

  const request: App.Domain.Http.RequestFn = async options => {
    const response = await fetchResponse(options)

    if (!response.ok) throw new HttpError(response)

    const result = {
      data: response.data,
      status: response.status,
    }

    return result
  }

  const safeRequest: App.Domain.Http.SafeRequestFn = async options => {
    const response = await fetchResponse(options)

    const result = {
      data: response.ok ? response.data : null,
      status: response.status,
      isOk: response.ok,
    }

    return result
  }

  return { request, safeRequest } satisfies App.Domain.Http.IHttpClient
}

export { createHttpClient }
