import { RoutePaths } from '@/data/router/enums/RoutePaths'
import { createNextRouteGuard } from '@/data/router/subjects/createNextRouteGuard'

import { useAuth } from '../../data/contexts/auth'

const AUTH_GUARD_NAME = 'Modules.Auth.Guards.Auth'

/**
 * A middleware for authentication.
 */
const AuthGuard = createNextRouteGuard(() => {
  const { isAuthenticated } = useAuth(AUTH_GUARD_NAME)

  if (!isAuthenticated) return RoutePaths.SignIn
})
AuthGuard.displayName = AUTH_GUARD_NAME

export { AuthGuard }
