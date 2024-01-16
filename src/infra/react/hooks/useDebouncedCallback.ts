import { debounced } from '@/shared/utils/functions'

import { useCallbackRef } from './useCallbackRef'

/**
 * Creates a debounced callback for a given amount of milliseconds.
 */
const useDebouncedCallback = <T extends (...args: any[]) => void>(
  value: T,
  ms: number,
) => useCallbackRef(debounced(value, ms))

export { useDebouncedCallback }
