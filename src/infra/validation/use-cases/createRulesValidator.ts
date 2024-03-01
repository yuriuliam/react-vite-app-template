import { RuleValidationError } from '@/domain/validation/errors/RuleValidationError'
import { type RuleLevel } from '@/domain/validation/RuleLevel'

type RuleFn<TValue> = (value: TValue) => string | null | undefined
type RuleDef<TValue> = [RuleLevel, RuleFn<TValue>]

const createRulesValidator = <TValue>(...rules: Array<RuleDef<TValue>>) => {
  return (value: TValue) => {
    const messages = rules.reduce<App.Domain.Validation.RuleMessages>(
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
