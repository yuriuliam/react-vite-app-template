import React from 'react'
import { Route } from 'react-router-dom'

import { Router as AppRouter } from './Router'

import { AuthLayout } from '@/layouts/AuthLayout'
import { ErrorBoundary } from '@/layouts/ErrorBoundary'
import { MainLayout } from '@/layouts/MainLayout'

import { Home } from '@/pages/Home'
import { SignIn } from '@/pages/SignIn'
import { SignOut } from '@/pages/SignOut'

import { COMPONENTS, ROUTES } from '@/utils/constants'

const Routes: React.FC = () => {
  return (
    <AppRouter>
      <Route errorElement={<ErrorBoundary />}>
        {/* Routes With Authentication */}
        <Route element={<AuthLayout />}>
          {/* Main Layout */}
          <Route element={<MainLayout />}>
            <Route path={ROUTES.ROOT} element={<Home />} />
          </Route>
        </Route>

        {/* Routes Without Authentication */}
        <Route>
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />

          <Route path={ROUTES.SIGN_OUT} element={<SignOut />} />
        </Route>
      </Route>
    </AppRouter>
  )
}
Routes.displayName = COMPONENTS.NAMES.ROUTES

export { Routes }
