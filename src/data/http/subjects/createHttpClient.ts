import { HttpError } from '@/domain/http/errors/HttpError'

import { buildUrl } from '../utils/buildUrl'

const createHttpClient: App.Domain.Http.CreateHttpClientFn = (
  baseUrl,
  baseOptions = {},
) => {
  const fetchResponse = async (options: App.Domain.Http.RequestOptions) => {
    const { uri, params, data = undefined, ...rest } = options

    const urlInput = buildUrl(baseUrl, uri, params)

    const response = await fetch(urlInput, {
      ...baseOptions,
      body: data ? JSON.stringify(data) : undefined,
      ...rest,
    })

    return response
  }

  const request: App.Domain.Http.RequestFn = async options => {
    const response = await fetchResponse(options)

    if (!response.ok) throw new HttpError(response)

    const result = {
      data: await response.json(),
      status: response.status,
    }

    return result
  }

  const safeRequest: App.Domain.Http.SafeRequestFn = async options => {
    const response = await fetchResponse(options)

    const result = {
      data: response.ok ? await response.json() : null,
      status: response.status,
      isOk: response.ok,
    }

    return result
  }

  return { request, safeRequest } satisfies App.Domain.Http.IHttpClient
}

export { createHttpClient }
