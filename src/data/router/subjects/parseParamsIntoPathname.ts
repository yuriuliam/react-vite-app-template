type ParseParamsIntoPathname = App.Domain.Router.ParseParamsIntoPathname

const parseParamsIntoPathname: ParseParamsIntoPathname = (route, params) => {
  const parsedRoute = route.replace(/:\w+/g, match => {
    const paramName = match.slice(1)

    return String(params[paramName])
  })

  return parsedRoute
}

export { parseParamsIntoPathname }
