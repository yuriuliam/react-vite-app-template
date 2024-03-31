const parseParamsIntoPathname = (
  route: string,
  params: Record<string, string | number>,
) => {
  const parsedRoute = route.replace(/:\w+/g, match => {
    const paramName = match.slice(1)

    return String(params[paramName])
  })

  return parsedRoute
}

export { parseParamsIntoPathname }
