type CreateRouteWithinErrorElementFn =
  App.Domain.Router.CreateRouteWithinErrorElementFn

const createRoutesWithinErrorElement: CreateRouteWithinErrorElementFn = (
  ErrorBoundary,
  routes,
) => ({
  errorElement: <ErrorBoundary />,
  children: routes,
})

export { createRoutesWithinErrorElement }
