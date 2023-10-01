import { Logger } from '../logger'

import { LOGGER } from '@/utils/constants'

abstract class Validator {
  protected readonly logger = Logger.getInstance(
    LOGGER.NAMESPACES.MODEL_VALIDATOR,
  )

  protected readonly name: string

  protected constructor(name: string) {
    this.name = name
  }

  public handleValidationError(error: unknown) {
    if (!(error instanceof Error)) return
    const message = `Validation Failed - ${error.message}`

    this.logger.error({
      name: this.name,
      content: message,
    })
  }
}

export { Validator }
