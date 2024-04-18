import { Outlet, Navigate } from 'react-router-dom'

import { assertRouteIsParsed } from './assertRouteIsParsed'

type CreateNextRouteGuardFn = App.Modules.Routing.CreateNextRouteGuardFn

const createNextRouteGuard: CreateNextRouteGuardFn = useNextRoute => {
  const RouteGuard: React.FC = () => {
    const nextRoute = useNextRoute()

    assertRouteIsParsed(
      nextRoute,
      '[createNextRouteGuard]: Route is not properly parsed',
    )

    return nextRoute ? <Navigate to={nextRoute} /> : <Outlet />
  }
  RouteGuard.displayName = 'App.Data.Router.Guard'

  return RouteGuard
}

export { createNextRouteGuard }
