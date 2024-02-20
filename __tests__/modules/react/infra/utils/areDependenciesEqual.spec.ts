import { describe, it, expect } from 'vitest'

import { areDependenciesEqual } from '@/modules/react/infra/utils/areDependenciesEqual'

describe('areDependenciesEqual', () => {
  it('should return true for dependencies with same values', () => {
    const firstDeps = [1, 'foo', true]
    const secondDeps = [1, 'foo', true]

    const result = areDependenciesEqual(firstDeps, secondDeps)

    expect(result).toBe(true)
  })

  it('should return false for dependencies with different values', () => {
    const firstDeps = [{}]
    const secondDeps = [{}]

    const result = areDependenciesEqual(firstDeps, secondDeps)

    expect(result).toBe(false)
  })

  it('should return false if length are different', () => {
    const firstDeps = ['foo', 'bar']
    const secondDeps = ['foo']

    const result = areDependenciesEqual(firstDeps, secondDeps)

    expect(result).toBe(false)
  })
})
