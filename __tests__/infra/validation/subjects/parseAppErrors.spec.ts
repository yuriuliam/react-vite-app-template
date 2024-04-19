import { Response as TauriResponse } from '@tauri-apps/api/http'
import { describe, it, expect } from 'vitest'

import { HttpError } from '@/domain/http/errors/HttpError'
import { AppError } from '@/domain/shared/errors/AppError'

import { parseAppErrors } from '@/infra/validation/parseAppErrors'

describe('parseAppErrors', () => {
  it('should be able to parse an app error', () => {
    const baseError = new Error('My normal error')
    const appError = new AppError('My app error', baseError)

    expect(appError).not.toBe(null)

    const result = parseAppErrors(appError)

    expect(result).toHaveProperty('app')
    expect(result.app).toHaveLength(2)
    expect(result.app.at(0)).toBe('My app error')
    expect(result.app.at(1)).toBe('My normal error')
  })

  it('should be able to parse an http error (inherited)', () => {
    const response = new TauriResponse({
      data: null,
      status: 408,
      headers: {},
      rawHeaders: {},
      url: 'http://react-vite.fake.mock.com',
    })

    const appError = new HttpError(response)

    const result = parseAppErrors(appError)

    expect(result).toHaveProperty('app')
    expect(result.app).toHaveLength(1)
    expect(result.app.at(0)).toBe(
      'An error occurred when trying to access a resource.',
    )
  })

  it('should ignore non-app errors', () => {
    const error = new Error()

    const result = parseAppErrors(error)

    expect(Object.keys(result)).toHaveLength(0)
  })
})
