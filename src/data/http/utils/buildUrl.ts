const buildUrl = (
  baseUrl: string,
  uri: string,
  searchParams?: Record<string, string> | undefined,
) => {
  const urlParams = new URLSearchParams(searchParams)
  const finalURI = urlParams.size ? `${uri}?${urlParams.toString()}` : uri

  return new URL(finalURI, baseUrl)
}

export { buildUrl }
