import { AppError } from '@/domain/commons/errors/AppError'

class ValidationError extends AppError {
  public constructor(validationError: unknown) {
    super('Validation failed for one or more resources', validationError)
  }
}

export { ValidationError }
