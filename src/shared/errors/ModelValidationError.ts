import { AppError } from './AppError'

import { type ErrorMessages } from '@/data/protocols/validation/createErrorParser'

class ModelValidationError extends AppError {
  public constructor(
    public validationMessages: ErrorMessages,
    validationError: unknown,
  ) {
    super(
      'An error occurred when trying to access a resource.',
      validationError,
    )
  }
}

export { ModelValidationError }
