import { act, renderHook } from '@testing-library/react'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

import { localSyncStorage } from '@/infra/protocols/cache/localSyncStorage'

import { spySyncStorage } from '#/__mocks__/protocols/cache/syncStorage'

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

    const { result: valueState } = renderHook(() => useAtom(valueAtom))

    const [value, setValue] = valueState.current

    expect(value).toEqual(atomValue)

    const newAtomValue = { value: 'bar' }

    act(() => {
      setValue(newAtomValue)
    })

    expect(localSyncStorage.setItem).toBeCalledTimes(1)
    expect(localSyncStorage.setItem).toBeCalledWith(atomKey, newAtomValue)
  })
})
