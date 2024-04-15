type ParseRoutePathFn = (
  path: App.Domain.Routing.RoutePathLike,
  params: App.Domain.Routing.RouteParamsLike,
) => App.Domain.Routing.RoutePathLike

const parseRoutePath: ParseRoutePathFn = (path, params) => {
  const parsedPath = path.replace(/:\w+/g, match => {
    const param = match.slice(1)

    if (!(param in params)) {
      throw new Error(`[parseRoutePath] Param ${param} not provided`)
    }

    return String(params[param])
  })

  return parsedPath as App.Domain.Routing.RoutePathLike
}

export { parseRoutePath }
