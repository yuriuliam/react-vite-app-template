import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { withProps } from '@/data/shared/hocs/withProps'

const createRouter: App.Domain.Router.CreateRouterFn = routes => {
  const router = createBrowserRouter(routes)

  const Router: App.Domain.Router.RouterRoot = withProps(RouterProvider, {
    router,
  })

  return Router
}

export { createRouter }
