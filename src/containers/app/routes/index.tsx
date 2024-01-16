import React from 'react'
import { Route } from 'react-router-dom'

import { ErrorGuard } from '../guards/ErrorGuard'
import { AuthenticatedAppLayout } from '../layouts/AuthenticatedAppLayout'
import { Router as AppRouter } from './Router'

import { HomePage } from '@/containers/home'
import { SignInPage } from '@/containers/sign-in'
import { SignOutPage } from '@/containers/sign-out'

import { AuthGuard } from '@/modules/auth/infra/guards/AuthGuard'

const ROUTES_NAME = 'App.Routes.Root'

const Routes: React.FC = () => (
  <AppRouter>
    <Route errorElement={<ErrorGuard />}>
      <Route element={<AuthGuard />}>
        <Route element={<AuthenticatedAppLayout />}>
          <Route path={'/'} element={<HomePage />} />
        </Route>
      </Route>

      <Route>
        <Route path={'/sign-in'} element={<SignInPage />} />

        <Route path={'/sign-out'} element={<SignOutPage />} />
      </Route>
    </Route>
  </AppRouter>
)
Routes.displayName = ROUTES_NAME

export { Routes }
