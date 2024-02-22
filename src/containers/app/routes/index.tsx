import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AppRoutePaths } from '@/config/routes'

import { HomePage } from '@/containers/home'
import { SignInPage } from '@/containers/sign-in'
import { SignOutPage } from '@/containers/sign-out'

import { routesWithinAuth } from '@/modules/auth/infra/core/routesWithinAuth'
import { routesWithinMainLayout } from '@/modules/layouts/infra/core/routesWithinMainLayout'
import { withProps } from '@/modules/react/infra/hocs/withProps'
import { routesWithinErrorBoundary } from '@/modules/router/infra/core/routesWithinErrorBoundary'

const ROUTES_NAME = 'Containers.App.Routes'

const router = createBrowserRouter([
  routesWithinErrorBoundary([
    routesWithinAuth([
      routesWithinMainLayout([
        {
          path: AppRoutePaths.Root,
          element: <HomePage />,
        },
      ]),
    ]),
    {
      path: AppRoutePaths.SignIn,
      element: <SignInPage />,
    },
    {
      path: AppRoutePaths.SignOut,
      element: <SignOutPage />,
    },
  ]),
])

const Routes = withProps(RouterProvider, { router })
Routes.displayName = ROUTES_NAME

export { Routes }
