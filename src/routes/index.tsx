import React from 'react'
import { Route } from 'react-router-dom'

import { Router as AppRouter } from './Router'

import { AuthGuard } from '@/guards/AuthGuard'
import { ErrorGuard } from '@/guards/ErrorGuard'

import { MainLayout } from '@/layouts/MainLayout'

import { Home as HomePage } from '@/pages/Home'
import { SignIn as SignInPage } from '@/pages/SignIn'
import { SignOut as SignOutPage } from '@/pages/SignOut'

import { COMPONENTS, ROUTES } from '@/utils/constants'

const Routes: React.FC = () => {
  return (
    <AppRouter>
      <Route errorElement={<ErrorGuard />}>
        <Route element={<AuthGuard />}>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.ROOT} element={<HomePage />} />
          </Route>
        </Route>

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
