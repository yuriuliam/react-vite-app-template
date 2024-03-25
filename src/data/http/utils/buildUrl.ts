const buildUrl = (
  baseUrl: string,
  uri: string,
  searchParams?: Record<string, string> | undefined,
) => {
  const urlParams = new URLSearchParams(searchParams)

  return new URL(uri.concat(urlParams.toString()), baseUrl)
}

export { buildUrl }
