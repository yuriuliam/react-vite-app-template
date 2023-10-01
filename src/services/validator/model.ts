import { ZodError, z } from 'zod'

import { Validator } from './base'

import { APP } from '@/utils/constants'

/**
 * A class dedicated to validate and parse incoming responses from the API.
 */
class ModelValidator extends Validator {
  private static _instance: ModelValidator

  protected constructor() {
    super(APP.NAMES.MODEl_VALIDATOR)
  }

  public static getInstance() {
    if (!ModelValidator._instance) {
      ModelValidator._instance = new ModelValidator()
    }

    return ModelValidator._instance
  }

  public parseAuthResponse(value: any) {
    const model = z.object({
      id: z.string().nonempty('id property is required.'),
      name: z.string().nonempty('name property is required.'),
      email: z
        .string()
        .nonempty('email property is required.')
        .email('given email is not valid.'),
      token: z.string().nonempty('token property is required.'),
    })

    return model.parse(value) satisfies AppModels.AuthResponse
  }

  public override handleValidationError(error: unknown) {
    if (!(error instanceof ZodError)) return

    const message = `Validation Failed - ${error.message}`

    this.logger.error({
      name: this.name,
      content: message,
      data: error.issues,
    })
  }
}

export { ModelValidator }
