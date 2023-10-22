import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useAuth } from '@/contexts/auth/context'
import { useFeatures } from '@/contexts/features/context'

import { APIMain } from '@/services/api/main'

import { createFakeAuthResponse } from '@/utils/faker'
import { promised } from '@/utils/promises'

import { createAuthWrapper, createFeaturesWrapper } from '#/__mocks__/wrappers'

describe('Features Context/Provider', () => {
  const TEST_NAME = 'Tests.Contexts.Features'
  const FF_TEST_1 = 'ff_tests_foo_bar'
  const FF_TEST_2 = 'ff_tests_hello_world'

  it('should be able to consume the context by useHook', () => {
    const { result: features } = renderHook(() => useFeatures(TEST_NAME), {
      wrapper: createFeaturesWrapper(),
    })

    expect(features.current).toBeTruthy()
  })

  it('should be able to add and remove features', () => {
    const { result: features } = renderHook(() => useFeatures(TEST_NAME), {
      wrapper: createFeaturesWrapper(),
    })

    act(() => {
      features.current.addFeatures(FF_TEST_1, FF_TEST_2)
    })

    expect(features.current.hasFeatures(FF_TEST_1)).toBeTruthy()
    expect(features.current.hasFeatures(FF_TEST_2)).toBeTruthy()

    act(() => {
      features.current.removeFeatures(FF_TEST_1)
    })

    expect(features.current.hasFeatures(FF_TEST_1)).toBeFalsy()
    expect(features.current.hasFeatures(FF_TEST_2)).toBeTruthy()

    act(() => {
      features.current.removeFeatures(FF_TEST_2)
    })

    expect(features.current.hasFeatures(FF_TEST_2)).toBeFalsy()
  })

  it('should not add duplicated feature flags', () => {
    const { result: features } = renderHook(() => useFeatures(TEST_NAME), {
      wrapper: createFeaturesWrapper(),
    })

    act(() => {
      features.current.addFeatures(FF_TEST_1, FF_TEST_1)
    })

    expect(features.current.hasFeatures(FF_TEST_1)).toBeTruthy()

    act(() => {
      features.current.removeFeatures(FF_TEST_1)
    })

    expect(features.current.hasFeatures(FF_TEST_1)).toBeFalsy()

    act(() => {
      features.current.removeFeatures(FF_TEST_1)
    })

    expect(features.current.hasFeatures(FF_TEST_1)).toBeFalsy()
  })

  it('should be able to remove all features with clearFeatures', () => {
    const { result: features } = renderHook(() => useFeatures(TEST_NAME), {
      wrapper: createFeaturesWrapper(),
    })

    act(() => {
      features.current.addFeatures(FF_TEST_1, FF_TEST_2)
    })

    expect(features.current.hasFeatures(FF_TEST_1)).toBeTruthy()
    expect(features.current.hasFeatures(FF_TEST_2)).toBeTruthy()

    act(() => {
      features.current.clearFeatures()
    })

    expect(features.current.hasFeatures(FF_TEST_1)).toBeFalsy()
    expect(features.current.hasFeatures(FF_TEST_2)).toBeFalsy()
  })

  it('should assign feature flags from api once fetched', async () => {
    const { result: auth } = renderHook(() => useAuth(TEST_NAME), {
      wrapper: createAuthWrapper(),
    })

    const { result: features } = renderHook(() => useFeatures(TEST_NAME), {
      wrapper: createFeaturesWrapper(),
    })

    const api = APIMain.getInstance()
    vi.spyOn(api, 'authenticate').mockReturnValue(
      promised(createFakeAuthResponse()),
    )
    vi.spyOn(api, 'getFeatures').mockReturnValue(promised([FF_TEST_1]))

    await act(async () => {
      await auth.current.signIn()
      await features.current.fetchFeatures(auth.current.token)
    })

    expect(features.current.hasFeatures(FF_TEST_1)).toBeTruthy()
  })

  it('should not assign invalid feature flags when api return null', async () => {
    const { result: auth } = renderHook(() => useAuth(TEST_NAME), {
      wrapper: createAuthWrapper(),
    })

    const { result: features } = renderHook(() => useFeatures(TEST_NAME), {
      wrapper: createFeaturesWrapper(),
    })

    const api = APIMain.getInstance()
    vi.spyOn(api, 'authenticate').mockReturnValue(
      promised(createFakeAuthResponse()),
    )
    vi.spyOn(api, 'getFeatures').mockReturnValue(promised(null))

    await act(async () => {
      await auth.current.signIn()
      await features.current.fetchFeatures(auth.current.token)
    })

    expect(features.current.hasFeatures(FF_TEST_1)).toBeFalsy()
  })
})
