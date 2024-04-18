import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import { type RoutePaths } from '../enums/RoutePaths'
import { useNavigateTo } from '../hooks/useNavigateTo'

type CreateErrorBoundaryFn =
  App.Modules.Routing.CreateErrorBoundaryFn<RoutePaths>

const createErrorBoundary: CreateErrorBoundaryFn = GuardHandler => {
  const ErrorBoundary: React.FC = () => {
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
  ErrorBoundary.displayName = 'App.Data.Router.ErrorBoundary'

  return ErrorBoundary
}

export { createErrorBoundary }
