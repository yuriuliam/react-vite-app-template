import { atom, createStore, useAtom } from 'jotai'

const createAppStore = () => {
  const appStore = createStore()

  const createAppAtom = <T>(defaultValue: T) => {
    const appAtom = atom<T>(defaultValue)

    const useAppAtom = () => useAtom(appAtom)

    return [atom, useAppAtom] as const
  }

  return [appStore, createAppAtom] as const
}

export { createAppStore }
