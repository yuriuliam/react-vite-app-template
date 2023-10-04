import axios, { isAxiosError, type AxiosInstance } from 'axios'
import { ZodError } from 'zod'

import { Logger } from '../logger'

import { LOGGER } from '@/utils/constants'

abstract class APIBase {
  protected readonly fetcher: AxiosInstance
  protected readonly logger = Logger.getInstance(LOGGER.NAMESPACES.API_SERVICE)
  protected readonly name: string

  protected constructor(name: string, baseURL: string) {
    this.name = name
    this.fetcher = axios.create({
      baseURL,
    })
  }

  protected handleError(error: unknown) {
    this.handleAxiosError(error)
    this.handleZodError(error)
  }

  protected handleAxiosError(error: unknown) {
    if (!isAxiosError(error)) return

    const message = `"URI ${error.config!.url}" Failed - ${error.message}`

    this.logger.error({
      name: this.name,
      content: message,
      data: error.response,
    })
  }

  protected handleZodError(error: unknown) {
    if (!(error instanceof ZodError)) return

    const message = `Validation Failed - ${error.message}`

    this.logger.error({
      name: this.name,
      content: message,
      data: error.issues,
    })
  }
}

export { APIBase }
