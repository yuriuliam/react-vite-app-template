import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { withProps } from '@/shared/hocs/withProps'

const createRouter: App.Modules.Routing.CreateRouterFn = routes => {
  const router = createBrowserRouter(routes)

  const Router: App.Modules.Routing.RouterRoot = withProps(RouterProvider, {
    router,
  })

  return Router
}

export { createRouter }
