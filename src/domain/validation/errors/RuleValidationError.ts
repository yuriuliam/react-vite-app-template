import { type RuleLevel } from '@/data/validation/enums/RuleLevel'

import { ValidationError } from './ValidationError'

class RuleValidationError extends ValidationError {
  public constructor(
    public validationMessages: App.Domain.Validation.RuleMessages<RuleLevel>,
  ) {
    super(undefined)
  }
}

export { RuleValidationError }
