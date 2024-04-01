import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import { type RoutePaths } from '../enums/RoutePaths'
import { useNavigateTo } from '../hooks/useNavigateTo'

type CreateErrorBoundaryFn = App.Domain.Router.CreateErrorBoundaryFn<RoutePaths>

const createErrorBoundary: CreateErrorBoundaryFn = GuardHandler => {
  const RouteGuard: React.FC = () => {
    const errorFromRoutes = useRouteError()
    const isRouteError = isRouteErrorResponse(errorFromRoutes)
    const navigateTo = useNavigateTo()

    return (
      <GuardHandler
        error={errorFromRoutes}
        isRouteError={isRouteError}
        navigateTo={navigateTo}
      />
    )
  }
  RouteGuard.displayName = 'App.Data.Router.ErrorBoundary'

  return RouteGuard
}

export { createErrorBoundary }
