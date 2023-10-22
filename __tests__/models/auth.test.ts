import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'

import { authResponseModel, authTokenModel, authUserModel } from '@/models/auth'

import {
  createFakeAuthResponse,
  createFakeAuthUser,
  createFakeToken,
} from '@/utils/faker'
import { parseZodErrors } from '@/utils/zod'

describe('authResponseModel', () => {
  it('should successfully parse consistent values', () => {
    const model = createFakeAuthResponse()

    const result = authResponseModel.safeParse(model)

    expect(result.success).toBeTruthy()
  })

  it('should fail parsing empty token', () => {
    const tokenFailModel = createFakeAuthResponse()
    tokenFailModel.token = ''

    let tokenError = null as ZodError | null

    try {
      authResponseModel.parse(tokenFailModel)
    } catch (error) {
      if (error instanceof ZodError) tokenError = error
    }

    expect(tokenError).not.toBe(null)
    expect(tokenError!.issues).toHaveLength(1)

    const parsedErrors = parseZodErrors(tokenError)

    expect(parsedErrors).toHaveProperty('token')
    expect(parsedErrors.token.at(0)).toBe('token property is required.')
  })
})

describe('authTokenModel', () => {
  it('should successfully parse consistent values', () => {
    const token = createFakeToken()

    const result = authTokenModel.safeParse(token)

    expect(result.success).toBeTruthy()
  })

  it('should fail parsing non-string values', () => {
    const token = Symbol.for('not-a-token')

    let tokenError = null as ZodError | null

    try {
      authTokenModel.parse(token)
    } catch (error) {
      if (error instanceof ZodError) tokenError = error
    }

    expect(tokenError).not.toBe(null)
    expect(tokenError!.issues).toHaveLength(1)

    const parsedErrors = parseZodErrors(tokenError)

    expect(parsedErrors).toHaveProperty('zod')
    expect(parsedErrors.zod.at(0)).toBe('Expected string, received symbol')
  })
})

describe('authUserModel', () => {
  it('should successfully parse consistent values', () => {
    const model = createFakeAuthUser()

    const result = authUserModel.safeParse(model)

    expect(result.success).toBeTruthy()
  })

  it('should fail parsing empty email', () => {
    const emailFailModel = createFakeAuthUser()
    emailFailModel.email = ''

    let emailError = null as ZodError | null

    try {
      authUserModel.parse(emailFailModel)
    } catch (error) {
      if (error instanceof ZodError) emailError = error
    }

    expect(emailError).not.toBe(null)
    expect(emailError!.issues).toHaveLength(2)

    const parsedErrors = parseZodErrors(emailError)

    expect(parsedErrors).toHaveProperty('email')
    expect(parsedErrors.email.at(0)).toBe('given email is not valid.')
    expect(parsedErrors.email.at(1)).toBe('email property is required.')
  })

  it('should fail parsing empty id', () => {
    const idFailModel = createFakeAuthUser()
    idFailModel.id = ''

    let idError = null as ZodError | null

    try {
      authUserModel.parse(idFailModel)
    } catch (error) {
      if (error instanceof ZodError) idError = error
    }

    expect(idError).not.toBe(null)
    expect(idError!.issues).toHaveLength(1)

    const parsedErrors = parseZodErrors(idError)

    expect(parsedErrors).toHaveProperty('id')
    expect(parsedErrors.id.at(0)).toBe('id property is required.')
  })

  it('should fail parsing empty name', () => {
    const nameFailModel = createFakeAuthUser()
    nameFailModel.name = ''

    let nameError = null as ZodError | null

    try {
      authUserModel.parse(nameFailModel)
    } catch (error) {
      if (error instanceof ZodError) nameError = error
    }

    expect(nameError).not.toBe(null)
    expect(nameError!.issues).toHaveLength(1)

    const parsedErrors = parseZodErrors(nameError)

    expect(parsedErrors).toHaveProperty('name')
    expect(parsedErrors.name.at(0)).toBe('name property is required.')
  })
})
