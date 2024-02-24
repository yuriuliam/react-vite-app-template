import { act, renderHook } from '@testing-library/react'
import { atomWithStorage } from 'jotai/utils'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

import { localSyncStorage } from '@/data/cache/use-cases/localSyncStorage'

import { StoragePrefix } from '@/domain/cache/enums/StoragePrefix'

import { useAppAtom } from '@/infra/cache/hooks/useAppAtom'

import { spySyncStorage } from '#/__mocks__/cache/syncStorage'

describe('localSyncStorage', () => {
  beforeEach(() => {
    void spySyncStorage(localSyncStorage)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should reflect data in Storage', () => {
    const atomKey = 'tests:value'
    const atomValue = { value: 'foo' }
    const valueAtom = atomWithStorage(atomKey, atomValue, localSyncStorage, {
      getOnInit: true,
    })

    const { result: valueState } = renderHook(() => useAppAtom(valueAtom))

    const [value, setValue] = valueState.current

    expect(value).toEqual(atomValue)

    const newAtomValue = { value: 'bar' }

    act(() => {
      setValue(newAtomValue)
    })

    expect(localStorage.getItem).toBeCalledTimes(1)
    expect(localStorage.setItem).toBeCalledTimes(1)

    expect(localSyncStorage.setItem).toBeCalledTimes(1)
    expect(localSyncStorage.setItem).toBeCalledWith(atomKey, newAtomValue)

    expect(
      window.localStorage.getItem(`${StoragePrefix.Local}:${atomKey}`),
    ).toBe(JSON.stringify(newAtomValue))
  })
})
