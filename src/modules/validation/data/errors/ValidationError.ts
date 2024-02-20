import { AppError } from '@/modules/shared/data/errors/AppError'

class ValidationError extends AppError {
  public constructor(validationError: unknown) {
    super('Validation failed for one or more resources', validationError)
  }
}

export { ValidationError }
