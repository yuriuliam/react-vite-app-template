import { ValidationError } from './ValidationError'

class SchemaError extends ValidationError {
  public constructor(
    public validationMessages: App.Modules.Validation.ErrorMessages,
    validationError: unknown,
  ) {
    super(validationError)
  }
}

export { SchemaError }
