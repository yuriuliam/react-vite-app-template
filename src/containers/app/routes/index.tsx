import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AppRoute } from '@/config/routes'

import { HomePage } from '@/containers/home'
import { SignInPage } from '@/containers/sign-in'
import { SignOutPage } from '@/containers/sign-out'

import { routesWithinMainLayout } from '@/data/app/use-cases/routesWithinMainLayout'
import { routesWithinErrorGuard } from '@/data/router/routesWithinErrorBoundary'

import { withProps } from '@/infra/react/hocs/withProps'

import { routesWithinAuth } from '@/modules/auth/data/use-cases/routesWithinAuth'

const ROUTES_NAME = 'Containers.App.Routes'

const router = createBrowserRouter([
  routesWithinErrorGuard([
    routesWithinAuth([
      routesWithinMainLayout([
        {
          path: AppRoute.Root,
          element: <HomePage />,
        },
      ]),
    ]),
    {
      path: AppRoute.SignIn,
      element: <SignInPage />,
    },
    {
      path: AppRoute.SignOut,
      element: <SignOutPage />,
    },
  ]),
])

const Routes = withProps(RouterProvider, { router })
Routes.displayName = ROUTES_NAME

export { Routes }
