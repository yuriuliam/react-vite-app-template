const createRoutesWithinErrorElement: App.Domain.Router.CreateRouteWithinErrorElementFn =
  (Guard, routes) => ({
    errorElement: <Guard />,
    children: routes,
  })

export { createRoutesWithinErrorElement }
