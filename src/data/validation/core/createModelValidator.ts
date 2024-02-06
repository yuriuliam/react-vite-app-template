import { type z } from 'zod'

import { ModelValidationError } from '@/data/validation/errors/ModelValidationError'

type ModelType = z.ZodType<any, any, any>
type ModelParams<TModel extends ModelType> = z.infer<TModel>

interface ICreateValidatorOptions<TModel extends ModelType> {
  model: TModel
  parseErrors: (error: unknown) => App.Infra.Validation.ErrorMessages
}

const createModelValidator = <TModel extends ModelType>({
  model,
  parseErrors,
}: ICreateValidatorOptions<TModel>) => {
  return (params: ModelParams<TModel>) => {
    try {
      model.parse(params)
    } catch (error) {
      throw new ModelValidationError(parseErrors(error), error)
    }
  }
}

export { createModelValidator }
