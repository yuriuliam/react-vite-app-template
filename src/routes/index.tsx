import React from 'react'
import { Route, json } from 'react-router-dom'

import { Router as AppRouter } from './Router'

import { AuthGuard } from '@/guards/AuthGuard'
import { ErrorBoundary } from '@/guards/ErrorBoundary'

import { MainLayout } from '@/layouts/MainLayout'

import { Home as HomePage } from '@/pages/Home'
import { SignIn as SignInPage } from '@/pages/SignIn'
import { SignOut as SignOutPage } from '@/pages/SignOut'

import { COMPONENTS, ROUTES } from '@/utils/constants'

const Routes: React.FC = () => {
  const loader = () => json({ hello: 'world!' })

  return (
    <AppRouter>
      <Route errorElement={<ErrorBoundary />}>
        {/* Routes With Authentication */}
        <Route element={<AuthGuard />}>
          {/* Main Layout */}
          <Route element={<MainLayout />}>
            <Route loader={loader} path={ROUTES.ROOT} element={<HomePage />} />
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
