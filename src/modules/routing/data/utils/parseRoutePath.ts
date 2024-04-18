type ParseRoutePathFn = (
  path: App.Modules.Routing.RoutePathLike,
  params: App.Modules.Routing.RouteParamsLike,
) => App.Modules.Routing.RoutePathLike

const parseRoutePath: ParseRoutePathFn = (path, params) => {
  const parsedPath = path.replace(/:\w+/g, match => {
    const param = match.slice(1)

    if (!(param in params)) {
      throw new Error(`[parseRoutePath] Param ${param} not provided`)
    }

    return String(params[param])
  })

  return parsedPath as App.Modules.Routing.RoutePathLike
}

export { parseRoutePath }
