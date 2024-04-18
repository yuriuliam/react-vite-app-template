type AssertRouteIsParsedFn = App.Modules.Routing.AssertRouteIsParsedFn

const assertRouteIsParsed: AssertRouteIsParsedFn = (route, message) => {
  if (!route) return

  if (typeof route === 'string') {
    console.assert(!route.includes(':'), message)

    return
  }

  if (!route.pathname) return

  console.assert(!route.pathname.includes(':'), message)
}

export { assertRouteIsParsed }
