import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/contexts/auth/context'

import { COMPONENTS, ROUTES } from '@/utils/constants'

/**
 * A middleware for authentication.
 */
const AuthGuard: React.FC = () => {
  const { isAuthenticated } = useAuth(COMPONENTS.NAMES.AUTH_GUARD)

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} />
}
AuthGuard.displayName = COMPONENTS.NAMES.AUTH_GUARD

export { AuthGuard }
