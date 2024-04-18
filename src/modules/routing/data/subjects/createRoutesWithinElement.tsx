type CreateRouteWithinElementFn = App.Modules.Routing.CreateRouteWithinElementFn

const createRoutesWithinElement: CreateRouteWithinElementFn = (
  Guard,
  routes,
) => ({
  element: <Guard />,
  children: routes,
})

export { createRoutesWithinElement }
