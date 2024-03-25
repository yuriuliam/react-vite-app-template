import { HomePage } from '@/containers/home'
import { SignInPage } from '@/containers/sign-in'
import { SignOutPage } from '@/containers/sign-out'

import { AppRoute } from '@/data/app/enums/AppRoute'
import { createRouter } from '@/data/router/subjects/createRouter'

import { routesWithinMainLayout } from '@/infra/app/routesWithinMainLayout'
import { routesWithinErrorGuard } from '@/infra/router/routesWithinErrorBoundary'

import { routesWithinAuth } from '@/modules/auth/infra/routesWithinAuth'

const Routes = createRouter([
  routesWithinErrorGuard([
    routesWithinAuth([
      routesWithinMainLayout([
        {
          path: AppRoute.Home,
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

export { Routes }
