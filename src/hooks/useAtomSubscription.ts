import React from 'react'

import { useStore, type Atom } from 'jotai'

const useAtomSubscription = (atom: Atom<any>, onUpdate: Utils.ActionFn) => {
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
