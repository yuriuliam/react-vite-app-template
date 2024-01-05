import { describe, it, expect } from 'vitest'

import { parseAppErrors } from '@/infra/protocols/validation/parseAppErrors'

import { AppError } from '@/shared/errors/AppError'
import { HttpError } from '@/shared/errors/HttpError'

describe('parseAppErrors', () => {
  it('should be able to parse an app error', () => {
    let appError = null

    try {
      throw new Error('My normal error')
    } catch (error) {
      appError = new AppError('My app error', error)
    }

    expect(appError).not.toBe(null)

    const result = parseAppErrors(appError)

    expect(result).toHaveProperty('app')
    expect(result.app).toHaveLength(2)
    expect(result.app.at(0)).toBe('My app error')
    expect(result.app.at(1)).toBe('My normal error')
  })

  it('should be able to parse an http error (inherited)', () => {
    let appError = null

    try {
      throw new Error('Connection timed out')
    } catch (error) {
      appError = new HttpError(error)
    }

    expect(appError).not.toBe(null)

    const result = parseAppErrors(appError)

    expect(result).toHaveProperty('app')
    expect(result.app).toHaveLength(2)
    expect(result.app.at(0)).toBe(
      'An error occurred when trying to access a resource.',
    )
    expect(result.app.at(1)).toBe('Connection timed out')
  })

  it('should ignore non-app errors', () => {
    const error = new Error()

    const result = parseAppErrors(error)

    expect(Object.keys(result)).toHaveLength(0)
  })
})
