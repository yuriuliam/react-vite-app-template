import { AppError } from '@/domain/shared/errors/AppError'

class EnvironmentValidationError extends AppError {
  public constructor(
    message: string,
    public errors: App.Domain.Validation.ValidationMessages,
  ) {
    super(message)
  }
}

export { EnvironmentValidationError }
