/**
 * Represents the level of a rule.
 * It's value is the field name for Rule Messages.
 * @see App.Infra.Validation.RuleMessages
 */
enum RuleLevel {
  ERROR = 'errors',
  WARN = 'warnings',
}

export { RuleLevel }
