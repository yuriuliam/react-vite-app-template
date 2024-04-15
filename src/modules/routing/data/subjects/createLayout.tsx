import { Outlet } from 'react-router-dom'

const createRouteLayout: App.Domain.Routing.CreateRouteLayoutFn = Component => {
  const Layout: App.Domain.Routing.RouteLayout = () => (
    <Component>
      <Outlet />
    </Component>
  )

  return Layout
}

export { createRouteLayout }
