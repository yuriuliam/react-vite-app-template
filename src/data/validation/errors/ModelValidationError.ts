import { ValidationError } from './ValidationError'

class ModelValidationError extends ValidationError {
  public constructor(
    public validationMessages: App.Infra.Validation.ErrorMessages,
    validationError: unknown,
  ) {
    super(validationError)
  }
}

export { ModelValidationError }
