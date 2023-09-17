import { APP } from './constants'

type AppKey<TKey extends string> = `${typeof APP.LOCAL_STORAGE.PREFIX}:${TKey}`

/**
 *
 */
const asLocalStorageKey = <TKey extends string>(key: TKey): AppKey<TKey> => {
  return `${APP.LOCAL_STORAGE.PREFIX}:${key}`
}

const isLocalStorageItemSet = (key: string) =>
  key in localStorage && localStorage.getItem(key) !== null

export { asLocalStorageKey, isLocalStorageItemSet }
