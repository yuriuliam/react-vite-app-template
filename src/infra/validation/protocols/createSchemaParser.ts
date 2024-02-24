import { SchemaError } from '@/domain/validation/errors/SchemaError'

import type { z } from 'zod'

const createSchemaParser = <T>(
  model: z.ZodType<T, any, any>,
  parseErrors: (error: unknown) => App.Domain.Validation.ErrorMessages,
) => {
  const parse = (data: unknown) => {
    try {
      return model.parse(data)
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
      } satisfies App.Domain.Validation.SafeParseResult
    }

    return {
      success: true,
      messages: {},
    } satisfies App.Domain.Validation.SafeParseResult
  }

  return {
    parse,
    safeParse,
  } satisfies App.Domain.Validation.SchemeParser<T>
}

export { createSchemaParser }
