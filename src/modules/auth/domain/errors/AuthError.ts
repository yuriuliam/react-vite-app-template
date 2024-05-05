import { AppError } from '@/domain/commons/errors/AppError'

class AuthError extends AppError {
  public constructor(baseError: unknown) {
    super('Something failed for one or more auth resources', baseError)
  }
}

export { AuthError }
