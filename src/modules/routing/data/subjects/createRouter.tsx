import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { withProps } from '@/shared/hocs/withProps'

const createRouter: App.Domain.Routing.CreateRouterFn = routes => {
  const router = createBrowserRouter(routes)

  const Router: App.Domain.Routing.RouterRoot = withProps(RouterProvider, {
    router,
  })

  return Router
}

export { createRouter }
