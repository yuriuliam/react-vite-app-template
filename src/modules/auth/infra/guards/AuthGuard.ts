import { AppRoute } from '@/data/app/enums/AppRoute'
import { createGuard } from '@/data/router/subjects/createGuard'

import { useAuth } from '../../data/contexts/auth'

const AUTH_GUARD_NAME = 'Modules.Auth.Guards.Auth'

/**
 * A middleware for authentication.
 */
const AuthGuard = createGuard(() => {
  const { isAuthenticated } = useAuth(AUTH_GUARD_NAME)

  return isAuthenticated ? null : AppRoute.SignIn
})
AuthGuard.displayName = AUTH_GUARD_NAME

export { AuthGuard }
