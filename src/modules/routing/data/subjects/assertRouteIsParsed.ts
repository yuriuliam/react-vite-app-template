import { assert } from '@/shared/utils/runtime'

type AssertRouteIsParsedFn = App.Modules.Routing.AssertRouteIsParsedFn

const assertRouteIsParsed: AssertRouteIsParsedFn = (route, message) => {
  if (!route) return

  if (typeof route === 'string') {
    assert(!route.includes(':'), message)

    return
  }

  if (!route.pathname) return

  assert(!route.pathname.includes(':'), message)
}

export { assertRouteIsParsed }
