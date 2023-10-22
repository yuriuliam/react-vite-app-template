import React from 'react'

import { useStore, type Atom } from 'jotai'

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

  return React.useSyncExternalStore(
    onAtomChange => {
      const unsubscribe = appStore.sub(atom, onAtomChange)

      return () => {
        unsubscribe()
      }
    },
    () => appStore.get(atom),
  )
}

export { useAtomValueSync }
