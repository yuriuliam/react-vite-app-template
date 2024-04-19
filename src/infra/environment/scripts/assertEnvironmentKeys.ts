import { isTestMode } from '@/data/environment/subjects/isTestMode'

import { EnvironmentValidationError } from '@/domain/environment/errors/EnvironmentValidationError'

import { environmentKeysSchema } from '../environmentKeysSchema'

const assertEnvironmentKeys = () => {
  if (isTestMode()) return

  const result = environmentKeysSchema.safeParse(import.meta.env)

  if (!result.isValid) {
    console.log('%o', import.meta.env)
    console.error('Environment is not valid! %o', result.messages)

    throw new EnvironmentValidationError(
      'Environment Differs from Schema',
      result.messages,
    )
  }
}

export { assertEnvironmentKeys }
