import { HttpError } from '@/domain/http/errors/HttpError'

import { parseJsonResponse } from '../utils/parseJsonResponse'
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
      data: await parseJsonResponse(response),
      status: response.status,
    }

    return result
  }

  const safeRequest: App.Domain.Http.SafeRequestFn = async options => {
    const response = await fetchResponse(options)

    const result = {
      data: await parseJsonResponse(response),
      status: response.status,
      isOk: response.ok,
    }

    return result
  }

  return { request, safeRequest } satisfies App.Domain.Http.IHttpClient
}

export { createHttpClient }
