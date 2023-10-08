import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { createFeaturesWrapper } from '../wrappers'

import { useFeatures } from '@/contexts/features/context'

describe('Features Context/Provider', () => {
  const TEST_NAME = 'Tests.Contexts.Features'

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

    const FF_TEST_1 = 'ff_tests_foo_bar'
    const FF_TEST_2 = 'ff_tests_hello_world'

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
})
