import { faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'

import { authResponseModel, authTokenModel, authUserModel } from '@/models/auth'

import { createFakeAuthResponse, createFakeAuthUser } from '@/utils/faker'

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
    expect(tokenError!.issues.at(0)!.message).toBe(
      'token property is required.',
    )
  })
})

describe('authTokenModel', () => {
  it('should successfully parse consistent values', () => {
    const token = faker.string.nanoid(64) satisfies AppModels.AuthToken

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
    expect(emailError!.issues.at(1)!.message).toBe(
      'email property is required.',
    )
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
    expect(idError!.issues.at(0)!.message).toBe('id property is required.')
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
    expect(nameError!.issues.at(0)!.message).toBe('name property is required.')
  })
})
