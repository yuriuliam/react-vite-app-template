import { APP } from './constants'

type AppKey<TKey extends string> = `${typeof APP.LOCAL_STORAGE.PREFIX}:${TKey}`

/**
 * Wrapper for local storage key, prefixing it for internal purposes.
 */
const asLocalStorageKey = <TKey extends string>(key: TKey): AppKey<TKey> => {
  return `${APP.LOCAL_STORAGE.PREFIX}:${key}`
}

export { asLocalStorageKey }
