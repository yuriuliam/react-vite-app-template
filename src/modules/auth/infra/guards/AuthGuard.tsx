import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '../contexts/auth/context'

const AUTH_GUARD_NAME = 'App.Guards.Auth'

/**
 * A middleware for authentication.
 */
const AuthGuard: React.FC = () => {
  const { isAuthenticated } = useAuth(AUTH_GUARD_NAME)

  return isAuthenticated ? <Outlet /> : <Navigate to={'/sign-in'} />
}
AuthGuard.displayName = AUTH_GUARD_NAME

export { AuthGuard }
