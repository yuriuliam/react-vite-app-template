const createRoutesWithinElement: App.Domain.Router.CreateRouteWithinElementFn =
  (Guard, routes) => ({
    element: <Guard />,
    children: routes,
  })

export { createRoutesWithinElement }
