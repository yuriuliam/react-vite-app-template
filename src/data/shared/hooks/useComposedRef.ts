import { composeRefs } from '../utils/composeRefs'
import { useCallbackRef } from './useCallbackRef'

/**
 * Compose React Refs into a single callback.
 */
const useComposedRef = <T>(...refs: Array<React.PossibleRef<T>>) =>
  useCallbackRef(composeRefs(...refs)) satisfies React.RefCallback<T>

export { useComposedRef }
