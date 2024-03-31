import { Outlet, Navigate } from 'react-router-dom'

import { assertRouteIsParsed } from './assertRouteIsParsed'

const createNextRouteGuard: App.Domain.Router.CreateNextRouteGuardFn =
  useNextRoute => {
    const RouteGuard: React.FC = () => {
      const nextRoute = useNextRoute()

      assertRouteIsParsed(
        nextRoute,
        'createNextRouteGuard: Route is not properly parsed',
      )

      return nextRoute ? <Navigate to={nextRoute} /> : <Outlet />
    }
    RouteGuard.displayName = 'App.Data.Router.Guard'

    return RouteGuard
  }

export { createNextRouteGuard }
