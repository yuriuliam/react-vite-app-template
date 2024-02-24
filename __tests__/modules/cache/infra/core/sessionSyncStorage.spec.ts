import { act, renderHook } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

import { sessionSyncStorage } from '@/data/cache/use-cases/sessionSyncStorage'

import { useAppAtom } from '@/infra/cache/hooks/useAppAtom'
import { createAtomWithStorage } from '@/infra/cache/use-cases/createAtomWithStorage'

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
    const valueAtom = createAtomWithStorage(
      atomKey,
      atomValue,
      sessionSyncStorage,
      {
        getOnInit: true,
      },
    )

    const { result: valueState } = renderHook(() => useAppAtom(valueAtom))

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
