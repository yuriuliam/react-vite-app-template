import { Outlet } from 'react-router-dom'

const createRouteLayout: App.Modules.Routing.CreateRouteLayoutFn =
  Component => {
    const Layout: App.Modules.Routing.RouteLayout = () => (
      <Component>
        <Outlet />
      </Component>
    )

    return Layout
  }

export { createRouteLayout }
