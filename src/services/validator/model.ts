import { z } from 'zod'

import { Validator } from './base'

import { APP } from '@/utils/constants'

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

  public parseAuthResponse(value: any): App.AuthResponse {
    const model = z.object({
      id: z.string().nonempty(),
      name: z.string().nonempty(),
      email: z.string().nonempty().email(),
      token: z.string().nonempty(),
    })

    return model.parse(value)
  }
}

export { ModelValidator }
