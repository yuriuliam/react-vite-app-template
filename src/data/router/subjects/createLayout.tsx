import { Outlet } from 'react-router-dom'

const createRouteLayout: App.Domain.Router.CreateRouteLayoutFn = Component => {
  const Layout: App.Domain.Router.RouteLayout = () => (
    <Component>
      <Outlet />
    </Component>
  )

  return Layout
}

export { createRouteLayout }
