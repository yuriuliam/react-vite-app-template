import { ValidationError } from './ValidationError'

class RuleValidationError extends ValidationError {
  public constructor(
    public validationMessages: App.Modules.Validation.RuleMessages,
  ) {
    super(null)
  }
}

export { RuleValidationError }
