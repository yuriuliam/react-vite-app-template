import { Outlet, Navigate } from 'react-router-dom'

const createNextRouteGuard: App.Domain.Router.CreateNextRouteGuardFn =
  useNextRoute => {
    const RouteGuard: React.FC = () => {
      const nextRoute = useNextRoute()

      return nextRoute ? <Navigate to={nextRoute} /> : <Outlet />
    }
    RouteGuard.displayName = 'App.Data.Router.Guard'

    return RouteGuard
  }

export { createNextRouteGuard }
