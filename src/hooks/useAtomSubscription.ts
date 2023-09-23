import React from 'react'

import { useStore, type Atom } from 'jotai'

/**
 * Creates a value subscription from an atom.
 * Once updated by any circumstances it will
 * trigger the `onUpdate` function.
 *
 * Once the component gets unmounted, the subscription is cancelled.
 *
 * @param atom The atom to be subscribed.
 * @param onUpdate The function which will be called as the listener.
 */
const useAtomSubscription = (atom: Atom<any>, onUpdate: Utils.CallbackFn) => {
  const appStore = useStore()

  React.useEffect(() => {
    const listener = onUpdate.bind(null)
    const unsubscribe = appStore.sub(atom, listener)

    return () => {
      unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [atom, onUpdate])
}

export { useAtomSubscription }
