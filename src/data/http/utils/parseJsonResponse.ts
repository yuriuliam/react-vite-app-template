type ParseJsonResponseFn = <T = any>(
  response: App.Domain.Http.HttpResponse,
) => Promise<T | undefined>

const parseJsonResponse: ParseJsonResponseFn = async response => {
  const contentType = response.headers.get('Content-Type')

  return contentType?.includes('application/json')
    ? await response.json()
    : undefined
}

export { parseJsonResponse }
