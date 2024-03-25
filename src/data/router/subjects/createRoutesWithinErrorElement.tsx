const createRoutesWithinErrorElement: App.Domain.Router.CreateRouterUtilFn = (
  Guard,
  routes,
) => ({
  errorElement: <Guard />,
  children: routes,
})

export { createRoutesWithinErrorElement }
