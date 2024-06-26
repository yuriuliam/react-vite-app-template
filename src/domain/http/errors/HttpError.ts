import { AppError } from '@/domain/commons/errors/AppError'

class HttpError extends AppError {
  public constructor(public response: App.Domain.Http.HttpResponse) {
    super('An error occurred when trying to access a resource.')
  }
}

export { HttpError }
