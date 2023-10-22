import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useAuth } from '@/contexts/auth/context'

import { APIMain } from '@/services/api/main'

import { createFakeAuthResponse } from '@/utils/faker'
import { promised } from '@/utils/promises'

import { createAuthWrapper } from '#/__mocks__/wrappers'

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

    const api = APIMain.getInstance()
    vi.spyOn(api, 'authenticate').mockReturnValue(
      promised(createFakeAuthResponse()),
    )

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

  it('should not sign in when api return null', async () => {
    const { result: auth } = renderHook(() => useAuth(TEST_NAME), {
      wrapper: createAuthWrapper(),
    })

    const api = APIMain.getInstance()
    vi.spyOn(api, 'authenticate').mockReturnValue(promised(null))

    await act(async () => {
      await auth.current.signIn()
    })

    expect(auth.current.isAuthenticated).toBeFalsy()
    expect(auth.current.token).toBe(null)
    expect(auth.current.user).toBe(null)
  })
})
