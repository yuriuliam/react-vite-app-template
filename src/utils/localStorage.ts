import { APP } from './constants'

type LocalStorageKey<
  TPrefix extends string,
  TKey extends string,
> = `${TPrefix}:${TKey}`

/**
 * Prefixes an App local storage key.
 */
const asAppLocalStorageKey = <TKey extends string>(key: TKey) =>
  asLocalStorageKey(APP.LOCAL_STORAGE.PREFIX, key)

/**
 * Wrapper for local storage key, prefixing it for internal purposes.
 */
const asLocalStorageKey = <TPrefix extends string, TKey extends string>(
  prefix: TPrefix,
  key: TKey,
): LocalStorageKey<TPrefix, TKey> => `${prefix}:${key}`

const getLocalStorageValue = <T>(key: string) => {
  return JSON.parse(window.localStorage.getItem(key) ?? 'null') as T | null
}

export { asAppLocalStorageKey, getLocalStorageValue }
