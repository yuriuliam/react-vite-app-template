import { Outlet, Navigate } from 'react-router-dom'

const createGuard: App.Domain.Router.CreateGuardFn = useNextRoute => {
  const RouteGuard: React.FC = () => {
    const nextRoute = useNextRoute()

    return !nextRoute ? <Outlet /> : <Navigate to={nextRoute} />
  }
  RouteGuard.displayName = 'App.Data.Router.Guard'

  return RouteGuard
}

export { createGuard }
