import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/with-selector'

import { areObjectsEqual } from '@/shared/utils/objects'

/**
 * Listens and retrieves current window size.
 *
 * @returns current window size.
 */
const useWindowSize = () =>
  useSyncExternalStoreWithSelector(
    onResize => {
      window.addEventListener('resize', onResize)

      return () => {
        window.removeEventListener('resize', onResize)
      }
    },
    () => ({ width: window.innerWidth, height: window.innerHeight }),
    () => ({ width: 0, height: 0 }),
    windowSize => windowSize,
    areObjectsEqual,
  )

export { useWindowSize }
