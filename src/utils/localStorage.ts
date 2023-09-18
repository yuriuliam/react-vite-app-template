import { APP } from './constants'

type AppKey<TKey extends string> = `${typeof APP.LOCAL_STORAGE.PREFIX}:${TKey}`

/**
 *
 */
const asLocalStorageKey = <TKey extends string>(key: TKey): AppKey<TKey> => {
  return `${APP.LOCAL_STORAGE.PREFIX}:${key}`
}

export { asLocalStorageKey }
