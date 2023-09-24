import React from 'react'
import { Route } from 'react-router-dom'

import { Router as AppRouter } from './Router'

import { Auth as AuthLayout } from '@/layouts/Auth'
import { ErrorBoundary } from '@/layouts/ErrorBoundary'
import { Main as MainLayout } from '@/layouts/Main'

import { Home as HomePage } from '@/pages/Home'
import { SignIn as SignInPage } from '@/pages/SignIn'
import { SignOut as SignOutPage } from '@/pages/SignOut'

import { COMPONENTS, ROUTES } from '@/utils/constants'

const Routes: React.FC = () => {
  return (
    <AppRouter>
      <Route errorElement={<ErrorBoundary />}>
        {/* Routes With Authentication */}
        <Route element={<AuthLayout />}>
          {/* Main Layout */}
          <Route element={<MainLayout />}>
            <Route path={ROUTES.ROOT} element={<HomePage />} />
          </Route>
        </Route>

        {/* Routes Without Authentication */}
        <Route>
          <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />

          <Route path={ROUTES.SIGN_OUT} element={<SignOutPage />} />
        </Route>
      </Route>
    </AppRouter>
  )
}
Routes.displayName = COMPONENTS.NAMES.ROUTES

export { Routes }
