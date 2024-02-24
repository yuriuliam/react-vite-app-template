import type { RouteObject } from 'react-router-dom'

const createRoutesWithinElement = (
  Guard: React.FC,
  routes: RouteObject[],
): RouteObject => ({
  element: <Guard />,
  children: routes,
})

export { createRoutesWithinElement }
