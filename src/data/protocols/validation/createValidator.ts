import { type z } from 'zod'

import { type IErrorParser } from './createErrorParser'

import { ModelValidationError } from '@/shared/errors'

type ModelType = z.ZodType<any, any, any>
type ModelParams<TModel extends ModelType> = z.infer<TModel>

type CreateValidatorOptions<TModel extends ModelType> = {
  model: TModel
  parseErrors: IErrorParser
}

const createValidator = <TModel extends ModelType>({
  model,
  parseErrors,
}: CreateValidatorOptions<TModel>) => {
  return (params: ModelParams<TModel>) => {
    try {
      model.parse(params)
    } catch (error) {
      throw new ModelValidationError(parseErrors(error), error)
    }
  }
}

export { createValidator }
