import { SchemaError } from '@/domain/validation/errors/SchemaError'

const createSchemaParser: App.Domain.Validation.CreateSchemaParserFn = (
  model,
  errorParser,
) => {
  const parse = (data: unknown) => {
    try {
      return model.parse(data)
    } catch (error) {
      throw new SchemaError(errorParser(error), error)
    }
  }

  const safeParse = (data: unknown) => {
    try {
      model.parse(data)
    } catch (error) {
      return { success: false, messages: errorParser(error) }
    }

    return { success: true, messages: {} }
  }

  return {
    parse,
    safeParse,
  }
}

export { createSchemaParser }
