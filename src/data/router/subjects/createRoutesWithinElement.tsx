const createRoutesWithinElement: App.Domain.Router.CreateRouterUtilFn = (
  Guard,
  routes,
) => ({
  element: <Guard />,
  children: routes,
})

export { createRoutesWithinElement }
