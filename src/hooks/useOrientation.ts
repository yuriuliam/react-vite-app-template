import React from 'react'

/**
 * Listens and retrieves current screen's orientation.
 *
 * @returns the current screen orientation value.
 */
const useOrientation = () => {
  return React.useSyncExternalStore(
    onOrientationChange => {
      window.screen.orientation.addEventListener('change', onOrientationChange)

      return () => {
        window.screen.orientation.removeEventListener(
          'change',
          onOrientationChange,
        )
      }
    },
    () => window.screen.orientation,
  )
}

export { useOrientation }
