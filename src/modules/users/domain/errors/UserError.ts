import { AppError } from '@/domain/app/errors/AppError'

class UserError extends AppError {
  public constructor(baseError: unknown) {
    super('Something failed for one or more user resources', baseError)
  }
}

export { UserError }
