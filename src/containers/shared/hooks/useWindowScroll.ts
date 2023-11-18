import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/with-selector'

import { areObjectsEqual } from '@/shared/utils/objects'

/**
 * Listens and retrieves current window scroll.
 *
 * @returns current window scroll.
 */
const useWindowScroll = () =>
  useSyncExternalStoreWithSelector(
    onScroll => {
      window.addEventListener('scroll', onScroll)

      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    },
    () => ({ x: window.scrollX, y: window.scrollY }),
    () => ({ x: 0, y: 0 }),
    windowScroll => windowScroll,
    (scrollA, scrollB) => areObjectsEqual(scrollA, scrollB),
  )

export { useWindowScroll }
