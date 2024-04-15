type CreateRouteWithinErrorElementFn =
  App.Domain.Routing.CreateRouteWithinErrorElementFn

const createRoutesWithinErrorElement: CreateRouteWithinErrorElementFn = (
  ErrorBoundary,
  routes,
) => ({
  errorElement: <ErrorBoundary />,
  children: routes,
})

export { createRoutesWithinErrorElement }
