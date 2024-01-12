import { AppError } from '../../../shared/errors/AppError'

class ModelValidationError extends AppError {
  public constructor(
    public validationMessages: App.Infra.Validation.ErrorMessages,
    validationError: unknown,
  ) {
    super(
      'An error occurred when trying to access a resource.',
      validationError,
    )
  }
}

export { ModelValidationError }
