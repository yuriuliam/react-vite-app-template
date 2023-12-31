import { useCallbackRef } from './useCallbackRef'

import { debounced } from '@/shared/utils/functions'

/**
 * Creates a debounced callback for a given amount of milliseconds.
 */
const useDebounced = <T extends (...args: any[]) => void>(
  value: T,
  ms: number,
) => useCallbackRef(debounced(value, ms))

export { useDebounced }
