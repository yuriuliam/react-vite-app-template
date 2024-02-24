import React from 'react'

/**
 * Retrieves and listens for the current internet status synchronously.
 *
 * @returns current `window.navigator.onLine`
 */
const useIsOnline = () =>
  React.useSyncExternalStore(
    onStatusChange => {
      window.addEventListener('online', onStatusChange)
      window.addEventListener('offline', onStatusChange)

      return () => {
        window.removeEventListener('online', onStatusChange)
        window.removeEventListener('offline', onStatusChange)
      }
    },
    () => window.navigator.onLine,
  )

export { useIsOnline }
