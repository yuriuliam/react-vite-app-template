import { useStore, type Atom } from 'jotai'
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/with-selector'

import { areObjectsEqual } from '@/shared/utils/objects'

/**
 * Use an atom value by synchronizing via store subscription.
 *
 * It returns the latest value of the atom.
 * Once it updates, the value gets updated.
 *
 * @param atom The atom to be subscribed.
 */
const useAtomValueSync = <TValue>(atom: Atom<TValue>) => {
  const appStore = useStore()

  return useSyncExternalStoreWithSelector(
    onAtomChange => {
      const unsubscribe = appStore.sub(atom, onAtomChange)

      return () => {
        unsubscribe()
      }
    },
    () => appStore.get(atom),
    () => appStore.get(atom),
    value => value,
    (valueA, valueB) => areObjectsEqual(valueA, valueB),
  )
}

export { useAtomValueSync }
