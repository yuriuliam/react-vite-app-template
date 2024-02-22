import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { AppRoutePaths } from '@/config/routes'

import { useAuth } from '../contexts/auth/context'

const AUTH_GUARD_NAME = 'Modules.Auth.Guards.Auth'

/**
 * A middleware for authentication.
 */
const AuthGuard: React.FC = () => {
  const { isAuthenticated } = useAuth(AUTH_GUARD_NAME)

  return isAuthenticated ? <Outlet /> : <Navigate to={AppRoutePaths.SignIn} />
}
AuthGuard.displayName = AUTH_GUARD_NAME

export { AuthGuard }
