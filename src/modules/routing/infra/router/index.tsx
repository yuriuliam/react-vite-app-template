import { HomePage } from '@/containers/home'
import { SignInPage } from '@/containers/sign-in'
import { SignOutPage } from '@/containers/sign-out'

import { routesWithinAuth } from '@/modules/auth/infra/routesWithinAuth'

import { RoutePaths } from '../../data/enums/RoutePaths'
import { createRouter } from '../../data/subjects/createRouter'
import { routesWithinErrorGuard } from '../routesWithinErrorBoundary'
import { routesWithinMainLayout } from '../routesWithinMainLayout'

const MainRouter = createRouter([
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

export { MainRouter }
