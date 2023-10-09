import { act, renderHook } from '@testing-library/react'
import { atom, useSetAtom } from 'jotai'
import { describe, expect, it } from 'vitest'

import { useAtomValueSync } from '@/hooks/useAtomValueSync'

import { store } from '@/services/store'

import { createStoreWrapper } from '#/wrappers'

describe('useAtomValueSync', () => {
  const testAtom = atom('hello world!')

  it('should register the value on the global store', () => {
    const { result: atomValue } = renderHook(() => useAtomValueSync(testAtom), {
      wrapper: createStoreWrapper(),
    })

    expect(atomValue.current).toBe(store.get(testAtom))
  })

  it('should update result once store updates the atom value', () => {
    const wrapper = createStoreWrapper()

    const { result: atomValueSync } = renderHook(
      () => useAtomValueSync(testAtom),
      {
        wrapper,
      },
    )
    const setAtom = renderHook(() => useSetAtom(testAtom), { wrapper })

    expect(atomValueSync.current).toBe('hello world!')

    const newValue1 = 'foo bar'

    act(() => {
      store.set(testAtom, newValue1)
    })

    expect(atomValueSync.current).toBe(newValue1)

    const newValue2 = 'hello world again!'

    act(() => {
      setAtom.result.current(newValue2)
    })

    expect(atomValueSync.current).toBe(newValue2)
  })
})
