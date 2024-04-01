type CreateRouteWithinElementFn = App.Domain.Router.CreateRouteWithinElementFn

const createRoutesWithinElement: CreateRouteWithinElementFn = (
  Guard,
  routes,
) => ({
  element: <Guard />,
  children: routes,
})

export { createRoutesWithinElement }
