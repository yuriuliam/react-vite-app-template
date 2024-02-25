import { atom, createStore, useAtom } from 'jotai'

const createAppStore = () => {
  const appStore = createStore() satisfies App.Domain.Cache.Store

  const createAppAtom = <T>(defaultValue: T) => {
    const appAtom = atom<T>(defaultValue)

    const useAppAtom = () => useAtom(appAtom, { store: appStore })

    return [atom, useAppAtom] as const
  }

  return [appStore, createAppAtom] as const
}

export { createAppStore }
