import { useCallbackRef } from './useCallbackRef'

import { debounced } from '@/shared/utils/functions'

/**
 * Debounces a value for a given amount of milliseconds.
 * @param value
 * @param ms
 * @returns
 */
const useDebounced = <T extends (...args: any[]) => void>(
  value: T,
  ms: number,
) => useCallbackRef(debounced(value, ms))

export { useDebounced }
