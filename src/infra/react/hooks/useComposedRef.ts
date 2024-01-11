import { useCallbackRef } from './useCallbackRef'

import { composeRefs } from '@/containers/shared/utils/composeRefs'

/**
 * Compose React Refs into a single callback.
 */
const useComposedRef = <T>(...refs: Array<React.PossibleRef<T>>) =>
  useCallbackRef(composeRefs(...refs)) satisfies React.RefCallback<T>

export { useComposedRef }
