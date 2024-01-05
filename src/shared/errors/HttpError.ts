import { isAxiosError } from 'axios'

import { AppError } from './AppError'

import { type Response } from '@/data/protocols/http/createHttpClient'

class HttpError extends AppError {
  public constructor(requestError: unknown) {
    super('An error occurred when trying to access a resource.', requestError)
  }

  public get response(): Response | null {
    if (!isAxiosError(this.cause) || !this.cause.response) return null

    const { data, status } = this.cause.response

    return {
      data,
      status,
    }
  }
}

export { HttpError }
