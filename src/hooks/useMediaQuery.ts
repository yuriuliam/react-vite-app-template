import React from 'react'

/**
 * Listens and retrieves a given media query.
 *
 * @returns `true` if there's a match for the query, otherwise `false`.
 */
const useMediaQuery = (query: string) => {
  return React.useSyncExternalStore(
    onChange => {
      const match = window.matchMedia(query)

      match.addEventListener('change', onChange)

      return () => {
        match.removeEventListener('change', onChange)
      }
    },
    () => window.matchMedia(query).matches,
  )
}

export { useMediaQuery }
