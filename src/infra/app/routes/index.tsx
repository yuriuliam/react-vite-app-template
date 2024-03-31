import { HomePage } from '@/containers/home'
import { SignInPage } from '@/containers/sign-in'
import { SignOutPage } from '@/containers/sign-out'

import { RoutePaths } from '@/data/router/enums/RoutePaths'
import { createRouter } from '@/data/router/subjects/createRouter'

import { routesWithinMainLayout } from '@/infra/app/routesWithinMainLayout'
import { routesWithinErrorGuard } from '@/infra/router/routesWithinErrorBoundary'

import { routesWithinAuth } from '@/modules/auth/infra/routesWithinAuth'

const Routes = createRouter([
  routesWithinErrorGuard([
    routesWithinAuth([
      routesWithinMainLayout([
        {
          path: RoutePaths.Home,
          element: <HomePage />,
        },
      ]),
    ]),
    {
      path: RoutePaths.SignIn,
      element: <SignInPage />,
    },
    {
      path: RoutePaths.SignOut,
      element: <SignOutPage />,
    },
  ]),
])

export { Routes }
