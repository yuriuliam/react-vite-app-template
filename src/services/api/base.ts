import axios, { isAxiosError, type AxiosInstance } from 'axios'

import { Logger } from '../logger'

import { LOGGER } from '@/utils/constants'

abstract class APIBase {
  protected readonly fetcher: AxiosInstance
  protected readonly logger = Logger.getInstance(LOGGER.NAMESPACES.API)
  protected readonly name: string

  protected constructor(name: string, baseURL: string) {
    this.name = name
    this.fetcher = axios.create({
      baseURL,
    })
  }

  protected handleFetcherError(error: unknown) {
    if (!isAxiosError(error)) return

    const message = `"URI ${error.config!.url}" Failed - ${error.message}`

    this.logger.error({
      name: this.name,
      content: message,
      data: error.response,
    })
  }
}

export { APIBase }
