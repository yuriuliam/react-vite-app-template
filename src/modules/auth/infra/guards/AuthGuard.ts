import { RoutePaths } from '@/modules/routing/data/enums/RoutePaths'
import { createNextRouteGuard } from '@/modules/routing/data/subjects/createNextRouteGuard'

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
