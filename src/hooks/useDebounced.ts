import { useCallbackRef } from './useCallbackRef'

import { debounced } from '@/utils/functions'

/**
 * Debounces a value for a given amount of milliseconds.
 * @param value
 * @param ms
 * @returns
 */
const useDebounced = <T extends (...args: any[]) => void>(
  value: T,
  ms: number,
) => {
  return useCallbackRef(debounced(value, ms))
}

export { useDebounced }
