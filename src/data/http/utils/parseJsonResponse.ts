type ParseJsonResponseFn = <T = any>(
  response: Response,
) => Promise<T | undefined>

const parseJsonResponse: ParseJsonResponseFn = async response => {
  const contentType = response.headers.get('Content-Type')

  return contentType?.includes('application/json')
    ? await response.json()
    : undefined
}

export { parseJsonResponse }
