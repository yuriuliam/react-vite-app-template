import type { RouteObject } from 'react-router-dom'

const createRoutesWithinErrorElement = (
  Guard: React.FC,
  routes: RouteObject[],
): RouteObject => ({
  errorElement: <Guard />,
  children: routes,
})

export { createRoutesWithinErrorElement }
