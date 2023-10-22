import { useCallbackRef } from './useCallbackRef'

import { composeRefs } from '@/utils/react'

/**
 * Compose React Refs into a single callback.
 *
 * @param refs the references to be stacked.
 * @returns a composed ref callback.
 */
const useComposedRef = <T>(...refs: Array<React.PossibleRef<T>>) => {
  return useCallbackRef(composeRefs(...refs))
}

export { useComposedRef }
