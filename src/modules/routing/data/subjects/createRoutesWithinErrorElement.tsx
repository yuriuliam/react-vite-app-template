type CreateRouteWithinErrorElementFn =
  App.Modules.Routing.CreateRouteWithinErrorElementFn

const createRoutesWithinErrorElement: CreateRouteWithinErrorElementFn = (
  ErrorBoundary,
  routes,
) => ({
  errorElement: <ErrorBoundary />,
  children: routes,
})

export { createRoutesWithinErrorElement }
