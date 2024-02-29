import { AppError } from '@/domain/app/errors/AppError'

class HttpError extends AppError {
  public constructor(public response: Response) {
    super('An error occurred when trying to access a resource.')
  }
}

export { HttpError }
