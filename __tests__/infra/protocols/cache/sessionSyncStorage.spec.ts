import { act, renderHook } from '@testing-library/react'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

import { sessionSyncStorage } from '@/infra/protocols/cache'

import { spySyncStorage } from '#/__mocks__/protocols/cache/syncStorage'

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
      unstable_getOnInit: true,
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
