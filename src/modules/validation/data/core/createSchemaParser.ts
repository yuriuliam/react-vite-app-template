import { SchemaError } from '../errors/SchemaError'

import type { z } from 'zod'

const createSchemaParser = <T>(
  model: z.ZodType<T, any, any>,
  parseErrors: (error: unknown) => App.Modules.Validation.ErrorMessages,
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
  } satisfies App.Modules.Validation.SchemeParser<T>
}

export { createSchemaParser }
