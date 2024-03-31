import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import { useNavigateTo } from '../hooks/useNavigateTo'

const createErrorBoundary: App.Domain.Router.CreateErrorBoundaryFn =
  GuardHandler => {
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
