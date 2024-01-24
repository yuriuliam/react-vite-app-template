import { ValidationError } from './ValidationError'

class RuleValidationError extends ValidationError {
  public constructor(
    public validationMessages: App.Infra.Validation.RuleMessages,
  ) {
    super(null)
  }
}

export { RuleValidationError }
