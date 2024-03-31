import { type To } from 'react-router-dom'

const assertRouteIsParsed = (route: To | null | undefined, message: string) => {
  if (!route) return

  if (typeof route === 'string') {
    console.assert(!route.includes(':'), message)

    return
  }

  if (!route.pathname) return

  console.assert(!route.pathname.includes(':'), message)
}

export { assertRouteIsParsed }
