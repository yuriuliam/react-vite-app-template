import { AppError } from '@/domain/app/errors/AppError'

class FeatureError extends AppError {
  public constructor(baseError: unknown) {
    super('Something failed for one or more feature resources', baseError)
  }
}

export { FeatureError }
