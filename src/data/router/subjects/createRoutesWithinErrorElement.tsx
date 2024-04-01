type CreateRouteWithinErrorElementFn =
  App.Domain.Router.CreateRouteWithinErrorElementFn

const createRoutesWithinErrorElement: CreateRouteWithinErrorElementFn = (
  Guard,
  routes,
) => ({
  errorElement: <Guard />,
  children: routes,
})

export { createRoutesWithinErrorElement }
