import { SchemaError } from '../errors/SchemaError'

import type { z } from 'zod'

const createModelSchema = (
  model: z.ZodType<any, any, any>,
  parseErrors: (error: unknown) => App.Modules.Validation.ErrorMessages,
) => {
  const parse = (data: unknown) => {
    try {
      model.parse(data)
    } catch (error) {
      throw new SchemaError(parseErrors(error), error)
    }
  }

  const safeParse = (data: unknown) => {
    try {
      model.parse(data)
    } catch (error) {
      return {
        success: false,
        messages: parseErrors(error),
      } satisfies App.Modules.Validation.SafeParseResult
    }

    return {
      success: true,
      messages: {},
    } satisfies App.Modules.Validation.SafeParseResult
  }

  return {
    parse,
    safeParse,
  } satisfies App.Modules.Validation.Schema
}

export { createModelSchema }
