import { act, renderHook } from '@testing-library/react'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

import { sessionSyncStorage } from '@/modules/cache/infra/core/sessionSyncStorage'

import { spySyncStorage } from '#/__mocks__/cache/syncStorage'

describe('sessionSyncStorage', () => {
  beforeEach(() => {
    void spySyncStorage(sessionSyncStorage)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should reflect data in Storage', () => {
    const atomKey = 'tests:value'
    const atomValue = { value: 'foo' }
    const valueAtom = atomWithStorage(atomKey, atomValue, sessionSyncStorage, {
      getOnInit: true,
    })

    const { result: valueState } = renderHook(() => useAtom(valueAtom))

    const [value, setValue] = valueState.current

    expect(value).toEqual(atomValue)

    const newAtomValue = { value: 'bar' }

    act(() => {
      setValue(newAtomValue)
    })

    expect(sessionSyncStorage.setItem).toBeCalledTimes(1)
    expect(sessionSyncStorage.setItem).toBeCalledWith(atomKey, newAtomValue)
  })
})
