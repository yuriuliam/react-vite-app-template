import { ValidationError } from './ValidationError'

class SchemaError extends ValidationError {
  public constructor(
    public validationMessages: App.Domain.Validation.ValidationMessages,
    validationError: unknown,
  ) {
    super(validationError)
  }
}

export { SchemaError }
