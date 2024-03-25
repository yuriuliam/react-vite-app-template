import { atom, createStore, useAtom } from 'jotai'

const createAppStore: App.Domain.Cache.CreateAppStoreFn = () => {
  const appStore = createStore()

  const createAppAtom: App.Domain.Cache.CreateAtomFn = defaultValue => {
    const appAtom = atom(defaultValue)

    const useAppAtom = () => useAtom(appAtom, { store: appStore })

    return [appAtom, useAppAtom]
  }

  return [appStore, createAppAtom]
}

export { createAppStore }
