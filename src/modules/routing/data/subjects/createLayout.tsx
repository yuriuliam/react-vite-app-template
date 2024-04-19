import { Outlet } from 'react-router-dom'

import { composedWith } from '@/shared/hocs/composedWith'

const createRouteLayout: App.Modules.Routing.CreateRouteLayoutFn =
  Component => {
    const Layout: App.Modules.Routing.RouteLayout = composedWith(
      Component,
      Outlet,
    )

    return Layout
  }

export { createRouteLayout }
