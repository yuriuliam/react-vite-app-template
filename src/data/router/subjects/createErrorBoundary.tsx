import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const createErrorBoundary: App.Domain.Router.CreateErrorBoundaryFn =
  GuardHandler => {
    const RouteGuard: React.FC = () => {
      const errorFromRoutes = useRouteError()
      const isRouteError = isRouteErrorResponse(errorFromRoutes)

      return (
        <GuardHandler error={errorFromRoutes} isRouteError={isRouteError} />
      )
    }
    RouteGuard.displayName = 'App.Data.Router.ErrorBoundary'

    return RouteGuard
  }

export { createErrorBoundary }
