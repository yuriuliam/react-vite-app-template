import { RuleValidationError } from '@/domain/validation/errors/RuleValidationError'

import { type RuleLevel } from '../enums/RuleLevel'

const createRulesValidator: App.Domain.Validation.CreateRulesValidatorFn<
  RuleLevel
> = (...rules) => {
  return value => {
    const messages = rules.reduce(
      (cur, [level, rule]) => {
        const levelMessage = rule(value)

        if (!levelMessage) return cur

        const oldLevelMessages = cur[level]

        return {
          ...cur,
          [level]: [...oldLevelMessages, levelMessage],
        }
      },
      { errors: [], warnings: [] },
    )

    if (messages.errors.length) throw new RuleValidationError(messages)

    return messages
  }
}

export { createRulesValidator }
