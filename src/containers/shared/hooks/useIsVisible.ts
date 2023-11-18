import React from 'react'

/**
 * Listens and retrieves document visibility.
 *
 * @returns `true` if is visible, otherwise `false`.
 */
const useIsVisible = () => {
  const visibilityState = React.useSyncExternalStore(
    onVisibilityChange => {
      window.document.addEventListener('visibilityChange', onVisibilityChange)

      return () => {
        window.document.removeEventListener(
          'visibilitychange',
          onVisibilityChange,
        )
      }
    },
    () => window.document.visibilityState,
  )

  return visibilityState === 'visible'
}

export { useIsVisible }
