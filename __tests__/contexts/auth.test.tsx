import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { createAuthWrapper } from '../wrappers'

import { useAuth } from '@/contexts/auth/context'

describe('Auth Context/Provider', () => {
  const TEST_NAME = 'Tests.Contexts.Auth'

  it('should be able to consume the context by useHook', () => {
    const { result: auth } = renderHook(() => useAuth(TEST_NAME), {
      wrapper: createAuthWrapper(),
    })

    expect(auth.current).toBeTruthy()
  })

  it('should be able to sign in and sign out', async () => {
    const { result: auth } = renderHook(() => useAuth(TEST_NAME), {
      wrapper: createAuthWrapper(),
    })

    expect(auth.current.isAuthenticated).toBeFalsy()
    expect(auth.current.token).toBe(null)
    expect(auth.current.user).toBe(null)

    await act(async () => {
      await auth.current.signIn()
    })

    expect(auth.current.isAuthenticated).toBeTruthy()
    expect(auth.current.token).toBeTypeOf('string')
    expect(auth.current.user).not.toBe(null)

    act(() => {
      auth.current.signOut()
    })

    expect(auth.current.isAuthenticated).toBeFalsy()
    expect(auth.current.token).toBe(null)
    expect(auth.current.user).toBe(null)
  })
})
