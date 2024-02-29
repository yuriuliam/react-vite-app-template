import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { AppRoute } from '@/domain/app/enums/AppRoute'

import { useAuth } from '../../infra/contexts/auth'

const AUTH_GUARD_NAME = 'Modules.Auth.Guards.Auth'

/**
 * A middleware for authentication.
 */
const AuthGuard: React.FC = () => {
  const { isAuthenticated } = useAuth(AUTH_GUARD_NAME)

  return isAuthenticated ? <Outlet /> : <Navigate to={AppRoute.SignIn} />
}
AuthGuard.displayName = AUTH_GUARD_NAME

export { AuthGuard }
